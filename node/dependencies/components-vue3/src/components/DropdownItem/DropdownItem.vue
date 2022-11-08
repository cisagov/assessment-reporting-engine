<template>
  <component
    :is="tag"
    data-id="sds-dropdown-item"
    class="block w-full select-none px-4 py-2 text-sm leading-5 text-left hover:no-underline hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600 focus:text-white"
    :class="{
      'bg-blue-500 dark:bg-blue-600 text-white': active,
      'text-gray-700 dark:text-gray-100': !active,
      'pointer-events-none opacity-50': disabled
    }"
    :disabled="disabled"
    role="menuitem"
    @click="closeOnClick ? emitter.emit('floating-ui-toggle', false) : null"
  >
    <!-- @slot Dropdown item content. -->
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: 'SdsDropdownItem',
  props: {
    /**
     * Determines the tag use for the component.
     */
    tag: {
      type: String,
      default: "a",
    },
    /**
     * Determines whether to close the parent dropdown when this component is clicked.
     */
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    /**
     * Determines if this component is currently active.
     */
    active: {
      type: Boolean,
      default: false,
    },
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const emitter: any = inject('emitter')
    return {
      emitter
    }
  }
});
</script>
