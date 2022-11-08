<template>
  <div data-id="sds-input">
    <input
      v-model="text"
      class="form-control"
      :class="{ valid, invalid }"
      :type="type"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
    >
    <character-counter
      v-if="countCharacters"
      class="text-right text-gray-500"
      :current-value="text.length"
      :max-value="maxlength"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CharacterCounter from '../CharacterCounter/CharacterCounter.vue'

export default defineComponent({
  name: 'SdsInput',
  components: {
    CharacterCounter,
  },
  props: {
    /**
     * The v-model of the component (the text input).
     */
    modelValue: { type: String, default: "" },
    /**
     * Determines whether to display the character counter or not.
     */
    countCharacters: { type: Boolean, default: false },
    /**
     * Determines the maxlength of the component.
     */
    maxlength: { type: Number, default: 524288 },
    /**
     * Determines the placeholder of the component.
     */
    placeholder: { type: String, default: "" },
    /**
     * Determines the type of the input field.
     */
    type: { type: String, default: "text" },
    /**
     * Determines whether to autofocus the input or not.
     */
    autofocus: { type: Boolean, default: false },
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Determines whether the input is required or not.
     */
    required: { type: Boolean, default: false },
    /**
     * Determines whether the input is read-only or not.
     */
    readonly: { type: Boolean, default: false },
    /**
     * Sets a valid styling if true.
     */
    valid: { type: Boolean, default: false },
    /**
     * Sets an invalid styling if true.
     */
    invalid: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  computed: {
    text: {
      get() {
        return this.modelValue;
      },
      set(value: string) {
        /**
         * Emmitted when modelValue changes.
         */
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>
