<template>
  <button
    data-id="sds-button"
    :class="[btnClass, variantClass, sizeClass, outlineClass, disabledClass, blockClass]"
    :disabled="disabled"
    @click="onClick"
  >
    <!-- @slot Button content. -->
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'SdsButton',
  props: {
    /**
     * Determines the theme color of the component.
     */
    variant: { type: String as PropType<'default' | 'primary' | 'success' | 'danger' | 'light' | ''>, default: '' },
    /**
     * Determines the size.
     */
    size: { type: String as PropType<'md' | 'sm' | ''>, default: '' },
    /**
     * Determines whether to use the outline styling or not.
     */
    outline: { type: Boolean, default: false },
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Determines whether to use the block styling or not.
     */
    block: { type: Boolean, default: false }
  },
  emits: ['click'],
  computed: {
    btnClass() {
      return this.variant !== '' || this.size !== '' || this.outline || this.block ? 'btn' : ''
    },
    variantClass() {
      switch (this.variant) {
        case 'default':
          return 'btn-default'
        case 'primary':
          return 'btn-primary'
        case 'success':
          return 'btn-success'
        case 'danger':
          return 'btn-danger'
        case 'light':
          return 'btn-light'
        default:
          return ''
      }
    },
    sizeClass() {
      switch (this.size) {
        case 'sm':
          return 'btn-sm'
        default:
          return ''
      }
    },
    outlineClass() {
      return this.outline ? 'btn-outline' : ''
    },
    disabledClass() {
      return this.disabled ? 'disabled' : ''
    },
    blockClass() {
      return this.block ? 'btn-block' : ''
    }
  },
  methods: {
    onClick() {
      /**
       * Emitted when the button is clicked.
       */
      this.$emit('click')
    }
  }
})
</script>