<template>
  <floating-ui
    data-id="sds-filter-by-dropdown"
    :placement="placement"
    :popper-class="`absolute border shadow-lg rounded-md bg-gray-100 dark:border-gray-600 dark:bg-gray-700 w-72 ${zIndexClass}`"
    arrow-class="absolute bg-gray-100 border dark:border-gray-600 dark:bg-gray-700 w-3 h-3 rotate-45"
    placement-top-arrow-class="-bottom-1.5 border-t-0 border-l-0"
    placement-right-arrow-class="-left-1.5 border-t-0 border-r-0"
    placement-bottom-arrow-class="-top-1.5 border-b-0 border-r-0"
    placement-left-arrow-class="-right-1.5 border-b-0 border-l-0"
    shift
  >
    <template #trigger="{ isOpen, toggle }">
      <button
        ref="button"
        v-uid
        :class="variantClass"
        type="button"
        aria-haspopup="true"
        :aria-expanded="isOpen"
        @click="toggle(); resetTmpOptions()"
      >
        <!-- @slot Title content of trigger button. -->
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
        <svg
          class="inline-block self-center w-5 h-5 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </template>
    <template #default="{ close }">
      <div
        class="p-2"
        aria-orientation="vertical"
        :aria-labelledby="button && (button as HTMLElement).id || undefined"
      >
        <div
          v-if="enableFilter"
          class="input-group input-group-sm mb-2 pb-2 border-b"
        >
          <input
            v-model="filterText"
            type="text"
            class="form-control"
            placeholder="Type to filter"
          >
          <span class="input-group-text">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div
          v-if="!enableFilter"
          class="pb-2 mb-2 space-x-1 space-y-2 border-b dark:border-gray-500"
        >
          <label
            class="text-gray-900 dark:text-gray-50 flex gap-1 w-max"
          >
            <input
              type="checkbox"
              class="my-auto"
              :checked="allSelected"
              :indeterminate.prop="indeterminate"
              @click="toggleSelect()"
            >
            <span class="my-auto">Select all</span>
          </label>
        </div>
        <div class="scroll-area max-h-48">
          <ul>
            <li
              v-for="o in filteredTmpOptions"
              :key="o.id"
            >
              <div class="space-x-1">
                <input
                  :id="`filter_by_dropdown_selection_list_${o.id}`"
                  v-model="o.selected"
                  type="checkbox"
                  class="focus:ring-0"
                  :value="o.id"
                >
                <label
                  :for="`filter_by_dropdown_selection_list_${o.id}`"
                  class="text-gray-900 dark:text-gray-50 ml-1"
                >{{ o.text }}</label>
              </div>
            </li>
          </ul>
        </div>
        <div class="pt-4 space-y-2">
          <button
            class="btn btn-blue btn-block btn-sm"
            @click="saveSelections(); close()"
          >
            Apply filter
          </button>
          <button
            class="btn btn-default btn-block btn-sm"
            @click="cancelSelections(); close()"
          >
            Cancel
          </button>
        </div>
      </div>
    </template>
  </floating-ui>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import FloatingUi from '../FloatingUi/FloatingUi.vue';
import { Uid } from '@shimyshack/uid'

interface FilterByDropdownOption {
  id: string | number
  selected: boolean
  text: string
}

type FilterByDropdownPlacement = 'auto' | 'top' | 'right'

export default defineComponent({
  name: "SdsFilterByDropdown",
  components: {
    FloatingUi,
  },
  directives: {
    uid: Uid
  },
  props: {
    /**
     * The v-model for this component. Determines opened/closed state.
     */
    modelValue: { type: Array as PropType<FilterByDropdownOption[]>, default: () => [] },
    /**
     * Determines the theme color of the component.
     */
    variant: { type: String as PropType<'primary' | 'secondary' | ''>, default: 'secondary' },
    /**
     * The z-index for the popover.
     */
    zIndex: { type: String as PropType<'0' | '10' | '20' | '30' | '40' | '50' | 'auto' | ''>, required: false, default: '50' },
    /**
     * The title for the toggle button.
     */
    title: { type: String, default: "Filter" },
    /**
     * Determine whether to enable option filtering on the dropdown.
     */
    enableFilter: { type: Boolean, default: false },
    /**
     * Determines whether to alphabetically sort the options.
     */
    enableSortOptions: { type: Boolean, default: false },
    /**
     * Determines the placement of the dropdown on the screen.
     */
    placement: { type: String as PropType<FilterByDropdownPlacement>, default: 'bottom-start' }
  },
  emits: ['update:modelValue'],
  setup() {
    const button = ref(null)
    return { button }
  },
  data() {
    return {
      filterText: "",
      tmpOptions: [],
      open: false,
    };
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case '0':
          return 'z-0'
        case '10':
          return 'z-10'
        case '20':
          return 'z-20'
        case '30':
          return 'z-30'
        case '40':
          return 'z-40'
        case '50':
          return 'z-50'
        case 'auto':
          return 'z-auto'
        default:
          return ''
      }
    },
    options: {
      get() {
        return this.modelValue;
      },
      set(value: FilterByDropdownOption[]) {
        /**
         * Emmitted when modelValue changes.
         */
        this.$emit("update:modelValue", value);
      },
    },
    allSelected() {
      return this.tmpOptions.every((i: FilterByDropdownOption) => i.selected);
    },
    someSelected() {
      return this.tmpOptions.some((i: FilterByDropdownOption) => i.selected);
    },
    indeterminate() {
      return this.someSelected && !this.allSelected;
    },
    filteredTmpOptions(): FilterByDropdownOption[] {
      return this.tmpOptions.filter(
        (i: FilterByDropdownOption) =>
          i.text && i.text.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
    variantClass() {
      switch (this.variant) {
         case 'primary':
          return 'link link-primary'
        case 'secondary':
          return 'link link-secondary'
        default:
          return ''
      }
    }
  },
  methods: {
    toggleSelect() {
      if (this.allSelected) {
        this.deselectAllOptions();
      } else {
        this.selectAllOptions();
      }
    },
    saveSelections() {
      /**
       * Emmitted when modelValue changes.
       */
      this.$emit("update:modelValue", this.tmpOptions);
    },
    cancelSelections() {
      // Make a unique copy of default list data
      this.resetTmpOptions();
    },
    resetTmpOptions() {
      const options = JSON.parse(JSON.stringify(this.options));
      if (this.enableSortOptions) {
        this.tmpOptions = options
          .sort((a: FilterByDropdownOption, b: FilterByDropdownOption) => {
            return a.text.toLowerCase() < b.text.toLowerCase()
              ? -1
              : a.text.toLowerCase() > b.text.toLowerCase()
                ? 1
                : 0;
          })
          .sort((a: FilterByDropdownOption, b: FilterByDropdownOption) => {
            return a.selected > b.selected
              ? -1
              : a.selected < b.selected
                ? 1
                : 0;
          });
      } else {
        this.tmpOptions = options;
      }
      this.filterText = ''
    },
    deselectAllOptions() {
      this.tmpOptions.forEach((i: FilterByDropdownOption) => {
        i.selected = false;
      });
    },
    selectAllOptions() {
      this.tmpOptions.forEach((i: FilterByDropdownOption) => {
        i.selected = true;
      });
    },
  },
});
</script>
