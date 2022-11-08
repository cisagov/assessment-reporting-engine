<template>
  <select
    v-model="localValue"
    data-id="sds-select"
    :disabled="disabled"
    :readonly="readonly"
    class="form-control"
    :class="{ 'form-control-sm': size === 'sm' }"
  >
    <option
      disabled
      value=""
    />
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script lang="ts">
type SelectModel = boolean | string | number | null
interface SelectOption {
  id: number | string
  value: number | string
  text: string
}

export default {
  name: 'SdsSelect'
}
</script>

<script setup lang="ts">
import { PropType, computed } from 'vue'

const props = defineProps({
  /**
   * The v-model of the component.
   */
  modelValue: { type: [Boolean, String, Number, Array, Object] as PropType<SelectModel>, default: null },
  /**
   * The options for the component.
   * 
   * Expects: `{ id, value, text }`
   */
  options: { type: Array as PropType<SelectOption[]>, default: () => [] },
  /**
   * Disables the component to prevent user interaction.
   */
  disabled: { type: Boolean, default: false },
  /**
   * Determines if the component is read-only.
   */
  readonly: { type: Boolean, default: false },
  /**
   * Determines the size of the component.
   */
  size: { type: String as PropType<'md' | 'sm' | ''>, default: 'md' },
})

const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(value: SelectModel) {
    /**
     * Emitted when modelValue changes.
     */
    emit("update:modelValue", value);
  }
})
</script>