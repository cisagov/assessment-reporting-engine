<template>
  <div>
    <div
      v-if="$slots.label || label"
      class="text-base"
    >
      <!-- @slot Label context.  -->
      <slot name="label">
        {{ label }}
      </slot>
    </div>
    <div class="flex gap-2">
      <div
        class="font-bold"
        :class="[sizeClass, variantClass]"
      >
        <!-- @slot Datapoint context.  -->
        <slot>{{ modelValueDisplay }}</slot>
      </div>
      <div
        v-if="$slots.context || context"
        class="text-base mt-auto"
      >
        <!-- @slot Context context.  -->
        <slot name="context">
          {{ context }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SdsDatapoint'
}
</script>

<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({
  /**
   * Determines the content of the default slot.
   * 
   * This is overridden if the default slot is present.
   */
  modelValue: { type: [String, Number], default: null },
  /**
   * Determines the content of the label slot.
   * 
   * This is overridden if the label slot is present.
   */
  label: { type: String, default: null },
  /**
   * Determines the content of the context slot.
   * 
   * This is overridden if the context slot is present.
   */
  context: { type: String, default: null },
  /**
   * Determines the overall look and feel of the component.
   */
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md'
  },
  /**
   * Determines the theme color of the component.
   */
  variant: {
    type: String as PropType<'gray' | 'tan' | 'yellow' | 'orange' | 'pink' | 'red' | 'purple' | 'indigo' | 'blue' | 'teal' | 'green'>,
    default: null
  }
})

const modelValueDisplay = computed(() =>  {
  if (typeof props.modelValue === 'number') {
    return props.modelValue.toLocaleString()
  }
  return props.modelValue
})

const sizeClass = computed(() => {
  let textSizeClass = ''

  switch(props.size) {
    case 'sm':
      textSizeClass = 'text-lg'
      break
    case 'md':
      textSizeClass = 'text-3xl'
      break
    default:
      textSizeClass = 'text-5xl'
  }

  return textSizeClass
})

const variantClass = computed(() => {
  let textClass = ''

  switch(props.variant) {
    case 'blue':
      textClass = 'text-blue-500 dark:text-blue-400'
      break
    case 'green':
      textClass = 'text-green-500 dark:text-green-400'
      break
    case 'teal':
      textClass = 'text-teal-500 dark:text-teal-400'
      break
    case 'orange':
      textClass = 'text-orange-700 dark:text-orange-400'
      break
    case 'red':
      textClass = 'text-red-500 dark:text-red-400'
      break
    case 'tan':
      textClass = 'text-tan-800 dark:text-tan-500'
      break
    case 'yellow':
      textClass = 'text-yellow-800 dark:text-yellow-400'
      break
    case 'pink':
      textClass = 'text-pink-600 dark:text-pink-400'
      break
    case 'purple':
      textClass = 'text-purple-500 dark:text-purple-400'
      break
    case 'indigo':
      textClass = 'text-indigo-500 dark:text-indigo-400'
      break
    case 'gray':
      textClass = 'text-gray-500 dark:text-gray-300'
      break
    default:
      textClass = 'text-black dark:text-white'
      break
  }

  return textClass
})
</script>
