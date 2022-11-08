<template>
  <div
    data-id="sds-loading-spinner"
    role="status"
  >
    <svg
      class="animate-spin"
      :class="sizeClass"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <span
      v-if="label"
      class="sr-only"
    >{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
  name: 'SdsLoadingSpinner',
  props: {
    /**
     * Sets the size of the spinner.
     */
    size: { type: String as PropType<'lg' | 'md' | 'sm' | 'auto' | ''>, default: 'md' },
    /**
     * Sets the accessiblity label for the spinner.
     */
    label: { type: String, default: null }
  },
  computed: {
    sizeClass() {
      switch (this.size) {
        case 'lg':
          return 'h-20 w-20'
        case 'sm': 
          return 'h-4 w-4'
        case 'auto':
          return ''
        default:
          return 'h-12 w-12'
      }
    }
  }
})
</script>
