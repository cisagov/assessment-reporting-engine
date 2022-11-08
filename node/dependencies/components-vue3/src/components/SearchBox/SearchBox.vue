<template>
  <div
    data-id="sds-search-box"
    class="input-group"
  >
    <div
      class="relative w-full input-group"
      :class="{
        disabled,
      }"
    >
      <input
        ref="input"
        v-model.trim="q"
        type="text"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        autocorrect="off"
        class="pr-8 rounded-r-none form-control"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        @keyup="searchOnKeyUp ? search() : null"
        @keyup.enter.self="search"
      >
      <button
        v-if="q.length > 0"
        tabindex="-1"
        type="button"
        class="absolute text-gray-500 right-2 top-3 hover:text-secondary focus:outline-none"
        :disabled="disabled"
        @click="clearSearch"
      >
        <span class="sr-only">Clear search</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 x"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <button
      :disabled="disabled || disableSearch"
      :class="[variantClass]"
      class="px-3"
      type="button"
      @click="search"
    >
      <span class="sr-only">Search</span>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 search"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
  name: "SdsSearchBox",
  props: {
    /**
     * The v-model passed from the parent that is used to init the local state "this.q".
     */
    modelValue: {
      type: String,
      default: "",
    },
    /**
     * The placeholder for the input.
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * The max amount of characters that can be entered into the input.
     */
    maxlength: {
      type: Number,
      default: 524288,
    },
    /**
     * Disables the ability for the component to run a search.
     */
    disableSearch: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines the theme color of the component.
     */
    variant: {
      type: String as PropType<'default' | 'primary' | 'danger' | ''>,
      default: "default",
    },
    /**
     * Determines if a search should be performed on key up.
     */
    searchOnKeyUp: {
      type: Boolean,
      default: false,
    },
    /**
     * Determine whether to autofocus the input.
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'search'],
  computed: {
    q: {
      get() {
        return this.modelValue;
      },
      set(val: string) {
        /**
         * Emitted when modelValue changes.
         */
        this.$emit("update:modelValue", val);
      },
    },
    variantClass() {
      switch (this.variant) {
        case "primary":
          return "btn btn-default text-primary dark:text-blue-400";
        case "danger":
          return "btn btn-default text-danger dark:text-red-400";
        default:
          return "btn btn-default text-secondary dark:text-gray-300";
      }
    },
  },
  mounted() {
    if (this.autofocus) (this.$refs.input as HTMLInputElement).focus();
  },
  methods: {
    clearSearch() {
      this.q = "";
      (this.$refs.input as HTMLInputElement).focus();
    },
    search() {
      if (this.disabled || this.disableSearch) return;
      /**
       * Emitted when a search is triggered with a payload of the query.
       */
      this.$emit("search", this.q);
    },
  },
});
</script>
