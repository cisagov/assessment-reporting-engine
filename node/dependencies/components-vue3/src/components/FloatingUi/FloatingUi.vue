<template>
  <div class="inline-block">
    <div
      ref="triggerRef"
      class="inline-block w-full"
    >
      <slot
        name="trigger"
        :is-open="open"
        :open="onOpen"
        :close="onClose"
        :toggle="onToggle"
      />
    </div>
    <client-only>
      <teleport to="body">
        <transition
          :css="!disableAnimation"
          enter-active-class="transition duration-75 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-50 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div
            v-if="open"
            ref="popperRef"
            :class="popperClass"
            :style="popperPosition"
          >
            <div
              v-if="!hideArrow"
              ref="arrowRef"
              :class="[arrowClass, arrowPlacementClass]"
              :style="arrowPosition"
            />
            <slot
              :is-open="open"
              :open="onOpen"
              :close="onClose"
              :toggle="onToggle"
            />
          </div>
        </transition>
      </teleport>
    </client-only>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SdsFloatingUi'
}
</script>

<script setup lang="ts">
import { ref, PropType, provide, watch, nextTick, computed } from 'vue'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import {
  autoUpdate,
  autoPlacement,
  computePosition,
  offset,
  inline,
  shift,
  flip,
  arrow,
} from '@floating-ui/dom'
import ClientOnly from '../ClientOnly/ClientOnly.vue'
import mitt from 'mitt';

import type { Placement as BasePlacement, ComputePositionConfig, Alignment, Strategy } from '@floating-ui/dom'
type Placement = BasePlacement | 'auto' | 'auto-start' | 'auto-end'

const triggerRef = ref(null)
const popperRef = ref(null)
const arrowRef = ref(null)
const open = ref(false)
const popperPosition = ref({ left: `0px`, top: `0px` })
const arrowPosition = ref({ left: `0px`, top: `0px` })
const currentPlacement = ref('')

const openStateTimeout = ref<null | ReturnType<typeof setTimeout>>(null)
const shouldOpen = ref(false)

const openStateDelay = (ms: number) => new Promise(res => {
  if (openStateTimeout.value) {
    clearTimeout(openStateTimeout.value)
  }
  openStateTimeout.value = setTimeout(res, ms)
  return openStateTimeout.value
})

const willOpenStateDelay = (fn: Function) => new Promise<void>(async (res, rej) => {
  return fn ? await fn(res, rej) : res()
})

const onOpen = async (ms = 0) => {
  if (props.disabled) return
  try {
    shouldOpen.value = true
    await openStateDelay(ms)
    if (shouldOpen.value) {
      await willOpenStateDelay(props.willOpen)
      if (open.value || !shouldOpen.value) return
      shouldOpen.value = false
      open.value = true
    }
  } catch (e) {
    shouldOpen.value = false
  }
}

const onClose = async (ms = 0) => {
  try {
    shouldOpen.value = false
    await openStateDelay(ms)
    await willOpenStateDelay(props.willClose)
    if (!open.value) return
    open.value = false
  } catch (e) { }
}

const onToggle = async (openMs = 0, closeMs = 0) => {
  if (open.value) {
    onClose(closeMs)
  } else {
    onOpen(openMs)
  }
}

const emitter = mitt();
provide('emitter', emitter);
emitter.on("floating-ui-toggle", (value) => {
  if (value) {
    !open.value && onOpen()
  } else {
    open.value && onClose()
  }
})

onClickOutside(popperRef, (event: any) => {
  if (triggerRef.value && event.target && (triggerRef.value as HTMLElement).contains(event.target as HTMLElement)) return
  if (!open.value) return
  onClose()
})

onKeyStroke('Escape', (e) => {
  if (!open.value) return
  e.preventDefault()
  onClose()
})

const props = defineProps({
  disabled: { type: Boolean, default: false },
  placement: { type: String as PropType<Placement>, default: 'auto' },
  strategy: { type: String as PropType<Strategy>, default: 'absolute' },
  overflowPadding: { type: Number, default: 5 },
  arrowPadding: { type: Number, default: 5 },
  offset: { type: Number, default: 10 },
  inline: { type: Boolean, default: false },
  shift: { type: Boolean, default: false },
  disableAnimation: { type: Boolean, default: false },
  popperClass: { type: String, default: undefined },
  hideArrow: { type: Boolean, default: false },
  arrowClass: { type: String, default: undefined },
  placementTopArrowClass: { type: String, default: undefined },
  placementRightArrowClass: { type: String, default: undefined },
  placementBottomArrowClass: { type: String, default: undefined },
  placementLeftArrowClass: { type: String, default: undefined },
  willOpen: { type: Function, default: null },
  willClose: { type: Function, default: null },
})

const arrowPlacementClass = computed(() => {
  if (!currentPlacement.value) return ''
  if (currentPlacement.value.includes('top')) {
    return props.placementTopArrowClass
  } else if (currentPlacement.value.includes('right')) {
    return props.placementRightArrowClass
  } if (currentPlacement.value.includes('bottom')) {
    return props.placementBottomArrowClass
  } if (currentPlacement.value.includes('left')) {
    return props.placementLeftArrowClass
  }
  return ''
})

const update = async () => {
  if (!triggerRef.value || !popperRef.value) return

  const options: Required<Pick<ComputePositionConfig, 'middleware' | 'placement' | 'strategy'>> = {
    middleware: [],
    placement: props.placement as BasePlacement,
    strategy: props.strategy
  }
  const isPlacementAuto = props.placement.startsWith('auto')

  // Offset
  if (props.offset) {
    options.middleware.push(offset(props.offset))
  }

  // Placement (auto vs specified)
  if (isPlacementAuto) {
    options.middleware.push(autoPlacement({
      alignment: props.placement.split('-')[1] ?? '',
    } as { alignment: Alignment }))
  } else {
    options.placement = props.placement as BasePlacement
  }

  // Inline
  if (props.inline) {
    options.middleware.push(inline())
  }

  // Flip - not used with auto placement
  if (!isPlacementAuto) {
    options.middleware.push(flip({
      padding: props.overflowPadding
    }))
  }

  // Shift
  if (props.shift) {
    options.middleware.push(shift({
      padding: props.overflowPadding
    }))
  }

  // Arrow
  if (!props.hideArrow && arrowRef.value) {
    options.middleware.push(arrow({
      element: arrowRef.value,
      padding: props.arrowPadding,
    }))
  }

  // Compute Position
  const data = await computePosition(triggerRef.value, popperRef.value, options)
  const { x, y, placement, middlewareData } = data

  popperPosition.value = {
    left: x ? `${x}px` : '',
    top: y ? `${y}px` : ''
  }

  if (!props.hideArrow) {
    const { x: arrowX, y: arrowY } = middlewareData.arrow as { x: number, y: number }
    currentPlacement.value = placement
    arrowPosition.value = {
      left: arrowX ? `${arrowX}px` : '',
      top: arrowY ? `${arrowY}px` : ''
    }
  }
}

let cleanup: null | Function = null

watch(open, (value) => {
  if (value) {
    nextTick(() => {
      update()
      if (triggerRef.value && popperRef.value) {
        cleanup = autoUpdate(triggerRef.value, popperRef.value, update);
      }
    })
  } else {
    cleanup && cleanup()
  }
})
</script>