<template>
  <div
    data-id="sds-character-counter"
    :class="{ 'text-danger': count < 0 }"
  >
    {{ count.toLocaleString() }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "SdsCharacterCounter",
  props: {
    /**
     * The current count value.
     */
    currentValue: { type: Number, default: 0 },
    /**
     * The maximum value allowed.
     */
    maxValue: { type: Number, default: 0 },
  },
  setup(props) {
    const count = computed(() => {
      return props.maxValue - props.currentValue
    })

    return {
      count,
    }
  }
});
</script>
