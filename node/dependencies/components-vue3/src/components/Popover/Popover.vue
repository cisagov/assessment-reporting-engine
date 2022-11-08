<template>
  <floating-ui
    data-id="sds-popover"
    :strategy="strategy"
    :placement="placement"
    :disabled="disabled"
    :will-open="willOpen"
    :will-close="willClose"
    :popper-class="`absolute bg-white dark:text-gray-50 dark:bg-gray-700 dark:border-gray-600 border shadow-lg rounded-md ${sizeClass} ${zIndexClass}`"
    arrow-class="absolute bg-white dark:bg-gray-700 dark:border-gray-600 border w-3 h-3 rotate-45"
    placement-top-arrow-class="-bottom-1.5 border-t-0 border-l-0"
    placement-right-arrow-class="-left-1.5 border-t-0 border-r-0"
    placement-bottom-arrow-class="-top-1.5 border-b-0 border-r-0"
    placement-left-arrow-class="-right-1.5 border-b-0 border-l-0"
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
        class="p-4"
        @mouseover="open()"
        @mouseout="close(closeDelay)"
      >
        <!-- @slot Popover content. @binding close, open, toggle, isOpen -->
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
    zIndex: { type: String as PropType<'0' | '10' | '20' | '30' | '40' | '50' | 'auto' | ''>, default: '50' },
    /**
     * Delays opening the toggle in ms.
     */
    openDelay: { type: Number, default: 500 },
    /**
     * Delays closing the toggle in ms.
     */
    closeDelay: { type: Number, default: 250 },
    /**
     * The width of the popover.
     */
    size: { type: String as PropType<'lg' | 'sm' | 'auto' | ''>, default: 'lg' },
    /**
     * The strategy of the popover on the screen.
     */
    strategy: { type: String as PropType<Strategy>, default: 'absolute' },
    /**
     * The placement of the popover on the screen.
     */
    placement: { type: String as PropType<Placement>, default: 'auto' },
    /**
     * Determines if the popover should display or not.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Allows for code execution prior to opening the popover.
     * 
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     * 
     * For example, this can prevent the popover from opening
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
     * Allows for code execution prior to closing the popover.
     * 
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     * 
     * For example, this can prevent the popover from closing
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
    sizeClass() {
      switch (this.size) {
        case 'sm':
          return 'w-80'
        case 'lg':
          return 'w-96'
        case 'auto':
          return 'w-auto'
        default:
          return 'w-80'
      }
    }
  },
})
</script>
