<template>
  <div
    :id="id"
    data-id="sds-radio-group"
    role="radiogroup"
    tabindex="-1"
    class="focus:outline-none"
  >
    <div
      v-for="(option, index) in options"
      :key="option.text"
      class="space-x-1"
      :class="{ 'inline-block mr-4': !stacked }"
    >
      <input
        :id="`${id}__option_${index}`"
        v-model="localChecked"
        type="radio"
        class="focus:outline-none"
        :value="option.value"
        :name="name ? name : `${id}__option`"
        :required="required"
        @click="onChange(option.value)"
      >
      <!-- @slot Label content (used to replace label element). @binding optionId, option -->
      <slot
        name="label"
        :option-id="`${id}__option_${index}`"
        :option="option"
      >
        <label
          :for="`${id}__option_${index}`"
        ><span>{{ option.text }}</span></label>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

let id = 0;

type RadioModel = boolean | string | number | null

interface RadioOption {
  value: string | number | boolean
  text: string
}

export default defineComponent({
  name: "SdsRadioGroup",
  props: {
    /**
     * The v-model of the radio group.
     */
    modelValue: { type: [Boolean, String, Number, null] as PropType<RadioModel>, default: null },
    /**
     * The name of the radio form field.
     */
    name: { type: String, default: null },
    /**
     * An array of options for the radio group.
     */
    options: { type: Array as PropType<RadioOption[]>, default: () => [] },
    /**
     * Determines whether the radio group is required or not.
     */
    required: { type: Boolean, default: false },
    /**
     * Determines whether the options are stacked vertically or horizontally.
     */
    stacked: { type: Boolean, default: false },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      id: "",
    };
  },
  computed: {
    localChecked: {
      get() {
        return this.modelValue;
      },
      set(value: RadioModel) {
        /**
         * Emmitted when modelValue changes.
         */
        this.$emit("update:modelValue", value);
      },
    },
  },
  mounted() {
    id++;
    this.id = `sds-radio-group_${id}`;
  },
  methods: {
    onChange(value: string) {
      /**
       * Emitted when an option's value has changed.
       */
      this.$emit('change', value)
    }
  }
});
</script>
