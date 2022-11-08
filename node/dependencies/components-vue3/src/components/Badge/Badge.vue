<template>
  <div
    data-id="sds-badge"
    class="inline-block tracking-wide max-w-full uppercase px-2 py-1 text-xs font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden align-baseline rounded"
    :class="variantClass"
  >
    <!-- @slot Badge content.  -->
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SdsBadge'
}
</script>

<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({
  /**
   * Determines the overall look and feel of the component.
   */
  type: {
    type: String as PropType<'light-border' | 'light' | 'medium' | 'dark'>,
    default: 'medium'
  },
  /**
   * Determines the theme color of the component.
   */
  variant: {
    type: String as PropType<'gray' | 'tan' | 'yellow' | 'orange' | 'pink' | 'red' | 'purple' | 'indigo' | 'blue' | 'teal' | 'green'>,
    default: 'gray'
  }
})

const variantClass = computed(() => {
  let textClass = ''
  let bgClass = ''
  let borderClass = ''

  if (props.type === 'light-border') {
    borderClass = 'border border-current'
  }

  switch(props.variant) {
    case 'blue':
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-blue-100'
        textClass = 'text-blue-500'
      } else if (props.type === 'medium') {
        bgClass = 'bg-blue-500'
        textClass = 'text-white'
      } else if (props.type === 'dark') {
        bgClass = 'bg-blue-700'
        textClass = 'text-white'
      }
      break
    case 'green':
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-green-100'
        textClass = 'text-green-500'
      } else if (props.type === 'medium') {
        bgClass = 'bg-green-500'
        textClass = 'text-white'
      } else if (props.type === 'dark') {
        bgClass = 'bg-green-700'
        textClass = 'text-white'
      }
      break
    case 'teal':
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-teal-100'
        textClass = 'text-teal-500'
      } else if (props.type === 'medium') {
        bgClass = 'bg-teal-500'
        textClass = 'text-white'
      } else if (props.type === 'dark') {
        bgClass = 'bg-teal-700'
        textClass = 'text-white'
      }
      break
    case 'orange':
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-orange-100'
        textClass = 'text-orange-800'
      } else if (props.type === 'medium') {
        bgClass = 'bg-orange-500'
        textClass = 'text-white'
      } else if (props.type === 'dark') {
        bgClass = 'bg-orange-700'
        textClass = 'text-white'
      }
      break
    case 'red':
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-red-100'
        textClass = 'text-red-500'
      } else if (props.type === 'medium') {
        bgClass = 'bg-red-500'
        textClass = 'text-white'
      } else if (props.type === 'dark') {
        bgClass = 'bg-red-700'
        textClass = 'text-white'
      }
      break
    case 'tan':
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-tan-200'
        textClass = 'text-tan-900'
      } else if (props.type === 'medium') {
        bgClass = 'bg-tan-600'
        textClass = 'text-gray-800'
      } else if (props.type === 'dark') {
        bgClass = 'bg-tan-800'
        textClass = 'text-white'
      }
      break
    case 'yellow':
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-yellow-100'
        textClass = 'text-yellow-800'
      } else if (props.type === 'medium') {
        bgClass = 'bg-yellow-500'
        textClass = 'text-gray-800'
      } else if (props.type === 'dark') {
        bgClass = 'bg-yellow-700'
        textClass = 'text-white'
      }
      break
    case 'pink':
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-pink-100'
        textClass = 'text-pink-500'
      } else if (props.type === 'medium') {
        bgClass = 'bg-pink-500'
        textClass = 'text-white'
      } else if (props.type === 'dark') {
        bgClass = 'bg-pink-700'
        textClass = 'text-white'
      }
      break
    case 'purple':
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-purple-100'
        textClass = 'text-purple-500'
      } else if (props.type === 'medium') {
        bgClass = 'bg-purple-400'
        textClass = 'text-white'
      } else if (props.type === 'dark') {
        bgClass = 'bg-purple-600'
        textClass = 'text-white'
      }
      break
    case 'indigo':
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-indigo-100'
        textClass = 'text-indigo-500'
      } else if (props.type === 'medium') {
        bgClass = 'bg-indigo-500'
        textClass = 'text-white'
      } else if (props.type === 'dark') {
        bgClass = 'bg-indigo-700'
        textClass = 'text-white'
      }
      break
    case 'gray':
    default:
      if (props.type === 'light-border' || props.type === 'light') {
        bgClass = 'bg-gray-100'
        textClass = 'text-gray-500'
      } else if (props.type === 'medium') {
        bgClass = 'bg-gray-500'
        textClass = 'text-white'
      } else if (props.type === 'dark') {
        bgClass = 'bg-gray-700'
        textClass = 'text-white'
      }
      break
  }

  return [textClass, bgClass, borderClass]
})
</script>
