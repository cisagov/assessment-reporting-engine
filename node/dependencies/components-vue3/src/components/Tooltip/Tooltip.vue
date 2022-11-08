<template>
  <floating-ui
    data-id="sds-tooltip"
    :strategy="strategy"
    :placement="placement"
    :disabled="disabled"
    :will-open="willOpen"
    :will-close="willClose"
    :popper-class="`absolute text-xs shadow rounded-lg text-center ${variantClass} ${sizeClass} ${zIndexClass}`"
    :arrow-class="`absolute w-2 h-2 rotate-45 ${variantArrowClass}`"
    placement-top-arrow-class="-bottom-1"
    placement-right-arrow-class="-left-1"
    placement-bottom-arrow-class="-top-1"
    placement-left-arrow-class="-right-1"
    disable-animation
    shift
  >
    <template #trigger="{ open, close }">
      <div
        @mouseover="open(openDelay)"
        @mouseleave="close(closeDelay)"
      >
        <!-- @slot Trigger content. -->
        <slot name="trigger" />
      </div>
    </template>
    <template #default="{ open, close, toggle, isOpen }">
      <div
        class="p-2"
        @mouseover="open()"
        @mouseout="close(closeDelay)"
      >
        <!-- @slot Tooltip content. @binding close, open, toggle, isOpen -->
        <slot
          :close="close"
          :open="open"
          :toggle="toggle"
          :is-open="isOpen"
        />
      </div>
    </template>
  </floating-ui>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import FloatingUi from "../FloatingUi/FloatingUi.vue";

import type { Placement as BasePlacement, Strategy } from '@floating-ui/dom'
type Placement = BasePlacement | 'auto' | 'auto-start' | 'auto-end'

export default defineComponent({
  name: 'SdsPopover',
  components: {
    FloatingUi
  },
  props: {
    /**
     * The z-index for the popover.
     */
    zIndex: { type: String as PropType<'0' | '10' | '20' | '30' | '40' | '50' | 'auto' | ''>, required: false, default: '50' },
    /**
     * Determines the theme color of the component.
     */
    variant: { type: String as PropType<'dark' | 'light'>, default: 'dark' },
    /**
     * Delays opening the toggle in ms.
     */
    openDelay: { type: Number, default: 0 },
    /**
     * Delays closing the toggle in ms.
     */
    closeDelay: { type: Number, default: 0 },
    /**
     * The width of the popover.
     */
    size: { type: String as PropType<'xl' | 'lg' | 'md' | 'sm' | 'auto' | ''>, default: 'sm' },
    /**
     * The strategy of the popover on the screen.
     */
    strategy: { type: String as PropType<Strategy>, default: 'absolute' },
    /**
     * The placement of the popover on the screen.
     */
    placement: { type: String as PropType<Placement>, default: 'top' },
    /**
     * Determines if the popover should display or not.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Allows for code execution prior to opening the tooltip.
     * 
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     * 
     * For example, this can prevent the tooltip from opening
     * until a call to a backend API completes.
     * 
     * Example definition in parent component:
     * 
     * ```
     * async willOpen(open, cancel) {
     *  try {
     *    await SOME_API_CALL_RESPONSE()
     *    // let the open process continue
     *    open()
     *  } catch (e) {
     *    // cancel the open process
     *    cancel()
     *  }
     * }
     * ```
     */
    willOpen: { type: Function, default: null },
    /**
     * Allows for code execution prior to closing the tooltip.
     * 
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     * 
     * For example, this can prevent the tooltip from closing
     * until a call to a backend API completes.
     * 
     * Example definition in parent component:
     * 
     * ```
     * async willClose(close, cancel) {
     *  try {
     *    await SOME_API_CALL_RESPONSE()
     *    // let the close process continue
     *    close()
     *  } catch (e) {
     *    // cancel the close process
     *    cancel()
     *  }
     * }
     * ```
     */
    willClose: { type: Function, default: null }
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case '0':
          return 'z-0'
        case '10':
          return 'z-10'
        case '20':
          return 'z-20'
        case '30':
          return 'z-30'
        case '40':
          return 'z-40'
        case '50':
          return 'z-50'
        case 'auto':
          return 'z-auto'
        default:
          return ''
      }
    },
    variantClass() {
      switch (this.variant) {
        case 'dark':
          return 'bg-dark text-light'
        case 'light':
          return 'bg-light text-dark'
        default:
          return 'bg-dark text-light'
      }
    },
    variantArrowClass() {
      switch (this.variant) {
        case 'dark':
          return 'bg-dark'
        case 'light':
          return 'bg-light'
        default:
          return 'bg-dark'
      }
    },
    sizeClass() {
      switch (this.size) {
        case 'sm':
          return 'w-32'
        case 'md':
          return 'w-48'
        case 'lg':
          return 'w-56'
        case 'xl':
          return 'w-72'
        case 'auto':
          return 'w-auto'
        default:
          return 'w-32'
      }
    }
  },
})
</script>
