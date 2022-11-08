<template>
  <div
    data-id="sds-multiselect"
    class="sds-multiselect"
    :class="{
      open: showDropdown,
      active,
      disabled,
      up: dropUp,
      canSearch,
      hideCaret,
      showClear,
      hasTags: !hideTags && selected.length > 0,
      showResults,
    }"
    @mouseup="handleMouseUp"
    @mousedown.prevent.stop.self
    @dblclick="selectText"
    @keydown="handleKeyDown($event)"
    @keyup="handleKeyUp($event)"
  >
    <ul
      class="tag-list"
      :class="{ single: !multiple }"
    >
      <template v-if="!hideTags || !multiple">
        <li
          v-for="s in selected"
          :key="s[valueKey]"
          class="tag-list-item"
        >
          <!-- @slot Tag template content. @binding tag, remove, disabled -->
          <slot
            name="tagTemplate"
            :tag="s"
            :remove="remove"
            :disabled="disabled"
          >
            <button
              v-if="multiple"
              type="button"
              class="remove"
              tabindex="-1"
              :title="`Clear ${s[labelKey]}`"
              :aria-label="`Clear ${s[labelKey]}`"
              :disabled="disabled"
              @click="remove(s)"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <span>{{ s[labelKey] }}</span>
          </slot>
        </li>
      </template>
      <li
        :style="{
          width: !multiple && showDropdown && canSearch ? '100%' : inputWidth,
        }"
        class="tag-list-item input"
      >
        <span
          ref="faux-input"
          class="faux-input"
          aria-hidden="true"
        >
          {{ modelValue }}
        </span>
        <select
          v-if="required && selected.length < 1"
          class="faux-input"
          tabindex="-1"
          required
          @focus="handleRequired"
        >
          <option />
        </select>
        <input
          ref="input"
          :value="modelValue"
          :placeholder="showPlaceholder ? placeholder : ''"
          :readonly="isReadonlyInput"
          :disabled="disabled"
          :style="{
            width: !multiple && showDropdown && canSearch ? '100%' : inputWidth,
          }"
          :maxlength="maxlength"
          autocapitalize="off"
          autocomplete="off"
          spellcheck="false"
          autocorrect="off"
          type="text"
          class="p-0 m-0 border-0 focus:shadow-none focus:ring-0"
          @input="search($event)"
        >
      </li>
    </ul>
    <button
      v-if="selected.length > 0 && showClear"
      type="button"
      tabindex="-1"
      title="Clear all"
      aria-label="Clear all"
      class="multiselect-clear"
      @click.prevent.stop="handleClearBtn"
    >
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
    <div
      v-if="!hideCaret && !(showClear && selected.length > 0)"
      aria-hidden="true"
      class="multiselect-caret"
    />
    <ul
      v-if="showDropdown"
      ref="dropdownMenu"
      :style="{ bottom, maxHeight: maxHeight + 'px' }"
      class="dropdown-list"
    >
      <li
        v-if="showLoading"
        class="dropdown-list-item loading"
      >
        <!-- @slot Loading template content. @binding loadingMsg -->
        <slot
          name="loadingTemplate"
          :loading-msg="loadingMsg"
        >
          {{ loadingMsg }}
        </slot>
      </li>
      <template v-if="showResults">
        <li
          v-for="(o, i) in filteredOptions"
          :key="o[valueKey]"
          :disabled="disabled"
          class="dropdown-list-item"
          :class="{ selected: isSelectedOption(o), active: i === arrowCounter }"
          @click="add(o)"
          @mouseover="arrowCounter = i"
        >
          <!-- @slot Option template content. @binding option, add, disabled, isSelectedOption -->
          <slot
            name="optionTemplate"
            :option="o"
            :add="add"
            :disabled="disabled"
            :is-selected-option="isSelectedOption(o)"
          >
            {{ o[labelKey] }}
            <template v-if="o.isNewTag && !isSelectedOption(o)">
              (new)
            </template>
          </slot>
        </li>
      </template>
      <li
        v-if="showDefault"
        class="dropdown-list-item default"
      >
        <!-- @slot Default template content. @binding defaultMsg -->
        <slot
          name="defaultTemplate"
          :default-msg="defaultMsg"
        >
          {{ defaultMsg }}
        </slot>
      </li>
      <li
        v-if="showNoResults"
        class="dropdown-list-item no-result"
      >
        <!-- @slot No results template content. @binding noResultsMsg -->
        <slot
          name="noResultsTemplate"
          :no-results-msg="noResultsMsg"
        >
          {{ noResultsMsg }}
        </slot>
      </li>
      <li
        v-if="showCannotAddResults"
        class="dropdown-list-item cannot-add-result"
      >
        <!-- @slot Cannot add results content. @binding cannotAddResultsMsg -->
        <slot
          name="cannotAddResultsTemplate"
          :cannot-add-results-msg="cannotAddResultsMsg"
        >
          {{ cannotAddResultsMsg }}
        </slot>
      </li>
      <li
        v-if="showInvalidInput"
        class="dropdown-list-item invalid-input"
      >
        <!-- @slot Invalid input content. @binding invalidInputMsg -->
        <slot
          name="invalidInputTemplate"
          :invalid-input-msg="invalidInputMsg"
        >
          {{ invalidInputMsg }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import debounce from "../../helpers/debounce";

interface MultiselectOption {
  [id: string | number]: any
}

interface MultiselectTag {
  [id: string | number]: any
  isNewTag?: boolean
}

export default defineComponent({
  name: 'SdsMultiselect',
  props: {
    /**
     * An array of the selected options.
     */
    selected: {
      type: Array as PropType<MultiselectOption[]>,
      default: () => [],
    },
    /**
     * An array of options that can be selected.
     */
    options: {
      type: Array as PropType<MultiselectOption[]>,
      default: () => [],
    },
    /**
     * The key used for an option's value.
     * 
     * Be careful when setting this as it can trigger `undefined`
     * errors if it doesn't exist in the options object.
     */
    valueKey: {
      type: String,
      default: "key",
    },
    /**
     * The key used for an option's label.
     *
     * Be careful when setting this as it can trigger `undefined`
     * and `trim()` errors if it doesn't exist in the options object.
     */
    labelKey: {
      type: String,
      default: "value",
    },
    /**
     * The v-model that determines the text value of the input field.
     */
    modelValue: {
      type: String,
      default: "",
    },
    /**
     * Determines whether to enable autofocus or not.
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines whether more than one option can be selected.
     */
    multiple: {
      type: Boolean,
      default: false,
    },
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines the required state of the component.
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines the loading state of the component.
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * The message displayed while loading is true.
     */
    loadingMsg: {
      type: String,
      default: "Loading...",
    },
    /**
     * The message that displays when the menu is initially opened.
     */
    defaultMsg: {
      type: String,
      default: "",
    },
    /**
     * The message that displays when there are no results returned from a lookup.
     */
    noResultsMsg: {
      type: String,
      default: "",
    },
    /**
     * The message that displays when you cannot select more items.
     */
    cannotAddResultsMsg: {
      type: String,
      default: "You have added the maximum amount of items allowed.",
    },
    /**
     * The message that displays when the user enters invalid text.
     */
    invalidInputMsg: {
      type: String,
      default: "HTML input is not allowed.",
    },
    /**
     * Determines whether to show or hide your selections as tags inside the input field.
     */
    hideTags: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines whether you can loop through the menu's options with the arrow keys
     * (e.g., pressing down on that last result sends you to the first result).
     */
    canLoopOptions: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines if options can be toggled when selected from the options list.
     */
    toggleSelectedOptions: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines if selected options should appear in the options list.
     */
    hideSelectedOptions: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines whether to close the menu on selection.
     */
    closeOnSelection: {
      type: Boolean,
      default: true,
    },
    /**
     * Determines whether the component allows for searching.
     */
    canSearch: {
      type: Boolean,
      default: true,
    },
    /**
     * Determines whether to remove the last selection.
     */
    disableRemoveLastSelection: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines if the input should be cleared after making a selection.
     */
    clearInputOnSelection: {
      type: Boolean,
      default: true,
    },
    /**
     * Determines if the options list should be purged on selection.
     */
    clearOptionsOnSelection: {
      type: Boolean,
      default: true,
    },
    /**
     * Determines the placeholder of the input.
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Determines the position of the menu.
     */
    openDirection: {
      type: String,
      default: "auto",
    },
    /**
     * Determines the max height of the open menu.
     */
    maxHeight: {
      type: Number,
      default: 200,
    },
    /**
     * Determines whether to hide the caret or not.
     */
    hideCaret: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines whether to show the clear field button or not.
     */
    showClear: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines whehther the multiselect will accept new values from the input.
     */
    taggable: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines the maxlength of the input field.
     */
    maxlength: {
      type: Number as PropType<number | undefined>,
      default: undefined,
    },
    /**
     * Determines the max number of items that can be selected.
     */
    maxItems: {
      type: Number,
      default: -1,
    },
    /**
     * Determines if new tags are forced to be lowercase.
     */
    enforceLowercaseNewTag: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update-selected', 'update-options', 'open', 'close', 'focus'],
  data() {
    return {
      debouncePositionDropdown: null as null | EventListener,
      isOpen: false,
      active: false,
      inputWidth: 0 as number | string,
      arrowCounter: 0,
      bottom: "auto",
      dropUp: false,
    };
  },
  computed: {
    showDropdown() {
      return (
        this.showLoading ||
        this.showDefault ||
        this.showNoResults ||
        this.showResults ||
        this.showCannotAddResults ||
        this.showInvalidInput
      );
    },
    showLoading() {
      return this.loading && this.isOpen && this.canAddItem;
    },
    showResults() {
      return (
        this.filteredOptions.length > 0 &&
        this.isOpen &&
        !this.loading &&
        this.canAddItem
      );
    },
    showDefault() {
      return (
        this.defaultMsg !== "" &&
        this.trimmedValue === "" &&
        this.filteredOptions.length < 1 &&
        !this.loading &&
        this.isOpen &&
        this.canAddItem
      );
    },
    showNoResults() {
      return (
        this.noResultsMsg !== "" &&
        this.trimmedValue !== "" &&
        this.filteredOptions.length < 1 &&
        !this.loading &&
        this.isOpen &&
        this.canAddItem
      );
    },
    showPlaceholder() {
      return (
        this.placeholder !== "" &&
        this.selected.length < 1 &&
        this.trimmedValue === ""
      );
    },
    showCannotAddResults() {
      return this.isOpen && !this.canAddItem && this.isCleanInput;
    },
    showInvalidInput() {
      return !this.isCleanInput;
    },
    canAddItem() {
      return (
        this.isCleanInput &&
        (this.maxItems < 0 || this.selected.length < this.maxItems)
      );
    },
    isReadonlyInput() {
      return !this.canSearch;
    },
    isCleanInput() {
      return !this.detectHtml(this.trimmedValue);
    },
    trimmedValue() {
      return this.modelValue.trim();
    },
    filteredOptions() {
      const options = this.options;
      if (this.taggable && this.trimmedValue !== "") {
        if (
          !options.some((i: MultiselectOption) => {
            return this.enforceLowercaseNewTag
              ? i[this.labelKey].trim().toLowerCase() ===
                  this.trimmedValue.toLowerCase()
              : i[this.labelKey].trim() === this.trimmedValue;
          })
        ) {
          options.push(this.newTag);
        }
      }
      if (this.hideSelectedOptions) {
        return options.filter((o) => {
          return (
            this.selected.filter((s) => {
              return o[this.valueKey] === s[this.valueKey];
            }).length === 0
          );
        });
      }
      return options;
    },
    newTag() {
      const tag: MultiselectTag = {};
      // random number between 100,000 and 1,000,000
      const uniqueId = Math.floor(Math.random() * (1000000 - 100000) + 100000);
      tag[this.valueKey] = uniqueId;
      tag[this.labelKey] = this.enforceLowercaseNewTag
        ? this.trimmedValue.toLowerCase()
        : this.trimmedValue;
      tag.isNewTag = true;
      return tag;
    },
  },
  watch: {
    showDropdown(show) {
      if (show) this.positionDropdown();
    },
    filteredOptions() {
      this.arrowCounter = 0;
    },
  },
  mounted() {
    this.resizeInput();
    setTimeout(() => {
      if (this.autofocus) {
        (this.$refs.input as HTMLInputElement).focus();
        this.active = true;
      }
    }, 0);
    document.addEventListener("click", this.handleOutsideClick);
    document.addEventListener("keyup", this.handleOutsideKeyUp);

    this.debouncePositionDropdown = debounce(this.positionDropdown, 150);
    document.addEventListener("scroll", this.debouncePositionDropdown);
    window.addEventListener("resize", this.debouncePositionDropdown);
  },
  unmounted() {
    document.removeEventListener("click", this.handleOutsideClick);
    document.removeEventListener("keyup", this.handleOutsideKeyUp);
    document.removeEventListener("scroll", (this.debouncePositionDropdown as EventListener));
    window.removeEventListener("resize", (this.debouncePositionDropdown as EventListener));
  },
  methods: {
    detectHtml(str: string) {
      return str.match(/<[^\s]|&[^\s;]*;/gi) !== null;
    },
    selectText() {
      (this.$refs.input as HTMLInputElement).setSelectionRange(0, this.modelValue.length);
    },
    search($event: Event) {
      if (!this.canSearch || !$event.target) return;
      this.input(($event.target as HTMLInputElement).value);
    },
    resizeInput() {
      setTimeout(() => {
        if (this.showPlaceholder) {
          this.inputWidth = "100%";
        } else {
          const minWidth = 20;
          const fauxInputWidth =
            typeof this.$refs["faux-input"] !== "undefined"
              ? (this.$refs["faux-input"] as HTMLElement).clientWidth + 20
              : 0;
          let elWidth = this.$el.clientWidth - 20;
          if (!this.hideCaret || (this.showClear && this.selected.length > 0))
            elWidth = elWidth - 10;
          const width = Math.min(Math.max(fauxInputWidth, minWidth), elWidth);
          this.inputWidth = width + "px";
        }
      }, 0);
    },
    removeLastSelection() {
      if (
        this.modelValue !== "" ||
        !this.canSearch ||
        this.hideTags ||
        this.disableRemoveLastSelection
      )
        return;
      const s = this.selected;
      s.splice(-1, 1);
      this.updateSelected(s);
      this.positionDropdown();
    },
    add(selection: MultiselectOption) {
      if (!this.canAddItem) return;
      if (this.isSelectedOption(selection)) {
        if (this.toggleSelectedOptions) this.remove(selection);
        return;
      }
      let s: MultiselectOption[] = [];
      if (this.multiple) s = this.selected;
      s.push(selection);
      this.updateSelected(s);
      if (this.clearInputOnSelection) this.clearInput();
      if (this.clearOptionsOnSelection) this.clearOptions();
      this.handleCloseOnSelection();
      this.positionDropdown();
    },
    remove(selection: MultiselectOption) {
      this.updateSelected(
        this.selected.filter(
          (i) => i[this.valueKey] !== selection[this.valueKey]
        )
      );
      this.handleCloseOnSelection();
      this.positionDropdown();
    },
    isSelectedOption(option: MultiselectOption) {
      return this.selected.some(
        (s) => s[this.labelKey] === option[this.labelKey]
      );
    },
    focusInput() {
      /**
       * Emmitted when input is focused.
       */
      this.$emit("focus");
      (this.$refs.input as HTMLInputElement).focus();
    },
    clearInput() {
      this.input("");
    },
    clearSelected() {
      this.updateSelected([]);
    },
    clearOptions() {
      this.updateOptions([]);
    },
    input(value: string) {
      /**
       * Emmitted when modelValue changes.
       */
      this.$emit("update:modelValue", value);
      this.resizeInput();
      this.positionDropdown();
    },
    updateSelected(s: MultiselectOption[]) {
      /**
       * Emmitted when selections have changed with payload of selections.
       */
      this.$emit("update-selected", s);
      this.resizeInput();
      if (this.arrowCounter > this.filteredOptions.length - 1) {
        this.arrowCounter = this.filteredOptions.length - 1;
      }
    },
    updateOptions(s: MultiselectOption[]) {
      /**
       * Emmitted when options have changed with payload of options.
       */
      this.$emit("update-options", s);
    },
    open() {
      if (this.disabled) return;
      if (!this.showDropdown) {
        /**
         * Emmitted when dropdown is opened.
         */
        this.$emit("open");
        this.focusInput();
        this.isOpen = true;
        this.$nextTick(() => {
          this.arrowCounter = 0;
        });
      }
    },
    close() {
      if (this.showDropdown) {
        /**
         * Emmitted when dropdown is closed.
         */
        this.$emit("close");
        if (!this.multiple) this.clearInput();
        this.isOpen = false;
        this.arrowCounter = 0;
      }
    },
    handleClearBtn() {
      this.clearSelected();
      this.clearInput();
      this.focusInput();
      this.positionDropdown();
    },
    handleArrows(direction: string) {
      if (!this.showDropdown) return;
      const min = 0;
      switch (direction) {
        // When going down, select next result until end
        // then loop back around starting with original query.
        case "down":
          if (this.arrowCounter < this.filteredOptions.length - 1) {
            this.arrowCounter = this.arrowCounter + 1;
            this.handleDropdownScroll();
          } else {
            if (this.canLoopOptions) this.arrowCounter = min;
            if (this.canLoopOptions) this.handleDropdownScroll();
          }
          break;
        // When going up, select prev result until at original query
        // then loop back around starting at the end of the results.
        case "up":
          if (this.arrowCounter > min) {
            this.arrowCounter = this.arrowCounter - 1;
            this.handleDropdownScroll();
          } else {
            if (this.canLoopOptions)
              this.arrowCounter = this.filteredOptions.length - 1;
            if (this.canLoopOptions) this.handleDropdownScroll(true);
          }
          break;
      }
    },
    handleDropdownScroll(jumpToLast = false) {
      if (!this.showDropdown || typeof this.$refs.dropdownMenu === "undefined")
        return;
      const element: Element =
        (this.$refs.dropdownMenu as HTMLElement).children[this.arrowCounter] || false;
      const itemHeight = element ? (element as HTMLElement).offsetHeight : 0;
      let pixelsToItemTop = 0;
      for (let i = 0; i < this.arrowCounter; i++) {
        pixelsToItemTop += ((this.$refs.dropdownMenu as HTMLElement).children[i] as HTMLElement).offsetHeight;
      }
      const pixelsToItemBottom = pixelsToItemTop + itemHeight;
      const viewport = {
        top: (this.$refs.dropdownMenu as HTMLElement).scrollTop || 0,
        bottom:
          (this.$refs.dropdownMenu as HTMLElement).offsetHeight +
            (this.$refs.dropdownMenu as HTMLElement).scrollTop || 0,
      };

      // scroll to item
      if (jumpToLast) {
        (this.$refs.dropdownMenu as HTMLElement).scrollTop = pixelsToItemBottom;
      } else if (pixelsToItemTop <= viewport.top) {
        (this.$refs.dropdownMenu as HTMLElement).scrollTop = pixelsToItemTop;
      } else if (pixelsToItemBottom >= viewport.bottom) {
        (this.$refs.dropdownMenu as HTMLElement).scrollTop = viewport.top + itemHeight;
      }
    },
    handleKeyUp($event: KeyboardEvent) {
      if (this.disabled) return;
      const keys = [
        "Enter",
        "Backspace",
        "Delete",
        "Tab",
        "Alt",
        "Shift",
        "Control",
        "Meta",
        "CapsLock",
        "Fn",
        "FnLock",
        "Hyper",
        "NumLock",
        "ScrollLock",
        "Super",
        "Symbol",
        "SymbolLock",
        "ArrowLeft",
        "ArrowRight",
        "Left",
        "Right",
      ];
      // Enter
      if ($event.key === "Enter" && this.showDropdown) {
        if (
          this.arrowCounter <= this.filteredOptions.length - 1 &&
          this.arrowCounter > -1
        ) {
          this.add(this.filteredOptions[this.arrowCounter]);
        }
        // Esc
      } else if ($event.keyCode === 27) {
        $event.preventDefault();
        $event.stopPropagation();
        this.handleEsc();
        // Tab
      } else if ($event.key === "Tab") {
        if (!this.active) this.active = true;
        // Non-special keys
      } else if (!this.showDropdown && !keys.includes($event.key)) {
        this.open();
      }
    },
    handleKeyDown($event: KeyboardEvent) {
      if (this.disabled) return;
      // Space bar
      if (!this.canSearch && $event.keyCode === 32) $event.preventDefault();
      // Enter
      if ($event.key === "Enter" && this.showDropdown) $event.preventDefault();
      // Delete or Backspace
      if ($event.key === "Delete" || $event.key === "Backspace") {
        this.removeLastSelection();
        // Tab
      } else if ($event.key === "Tab") {
        if (this.showDropdown) {
          if (
            this.arrowCounter <= this.filteredOptions.length - 1 &&
            this.arrowCounter > -1 &&
            this.canAddItem
          ) {
            this.add(this.filteredOptions[this.arrowCounter]);
            $event.preventDefault();
          } else {
            this.close();
          }
        }
        // Up Arrow
      } else if ($event.key === "ArrowUp" || $event.key === "Up") {
        $event.preventDefault();
        $event.stopPropagation();
        this.handleArrows("up");
        // Down Arrow
      } else if ($event.key === "ArrowDown" || $event.key === "Down") {
        $event.preventDefault();
        $event.stopPropagation();
        this.handleArrows("down");
      }
    },
    handleMouseUp() {
      if (this.disabled) return;
      this.open();
      this.active = true;
    },
    handleCloseOnSelection() {
      if (this.closeOnSelection) {
        this.close();
      } else {
        this.focusInput();
      }
    },
    handleOutsideClick($event: MouseEvent) {
      if (this.$el.contains($event.target)) return;
      if (this.active) this.active = false;
      this.close();
    },
    handleOutsideKeyUp($event: KeyboardEvent) {
      if (this.$el.contains($event.target)) return;
      if (this.active) this.active = false;
    },
    positionDropdown() {
      if (!this.showDropdown) return;
      this.$nextTick(() => {
        if (this.openDirection === "down") this.dropUp = false;
        if (this.openDirection === "up") {
          this.dropUp = true;
          this.bottom = this.$el.clientHeight + "px";
        }
        if (this.openDirection === "auto") {
          // const spaceAbove = this.$el.getBoundingClientRect().top
          const spaceBelow =
            window.innerHeight - this.$el.getBoundingClientRect().bottom;
          const notEnoughSpaceBelow = spaceBelow < this.maxHeight;
          this.dropUp = notEnoughSpaceBelow;
          this.bottom = this.dropUp ? this.$el.clientHeight + "px" : "auto";
        }
      });
    },
    handleEsc() {
      this.close();
    },
    handleRequired() {
      (this.$refs.input as HTMLInputElement).focus();
      if (!this.active) this.active = true;
    },
  },
});
</script>

<style lang="postcss" scoped>
.sds-multiselect {
  @apply block relative text-gray-900 bg-white border-gray-500 bg-opacity-75 border-opacity-75 border rounded shadow-inner cursor-pointer whitespace-normal dark:text-gray-100 dark:bg-opacity-10;
}

.sds-multiselect.active,
.sds-multiselect.open {
  @apply border-blue-500 rounded ring-2 ring-blue-300 dark:ring-blue-700;
}

.sds-multiselect.open:not(.up) {
  border-bottom: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}

.sds-multiselect.open.up {
  border-top: 1px solid transparent;
  border-radius: 0 0 4px 4px;
  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

.sds-multiselect.disabled,
fieldset[disabled] .sds-multiselect {
  @apply cursor-not-allowed bg-gray-100 opacity-75 dark:bg-gray-900;
}

.sds-multiselect.disabled *,
fieldset[disabled] .sds-multiselect * {
  @apply pointer-events-none;
}

.multiselect-caret {
  @apply transition-transform duration-200 ease-linear text-center absolute;
  width: 32px;
  height: 34px;
  right: 0;
  top: 0;
  padding: 4px 8px;
}

.open .multiselect-caret {
  transform: rotate(180deg);
}

.multiselect-caret:before {
  position: relative;
  right: 0;
  top: 65%;
  color: theme("colors.gray.400");
  margin-top: 4px;
  border-style: solid;
  border-width: 5px 5px 0;
  border-color: theme("colors.gray.300") transparent transparent;
  content: "";
}

.dark .multiselect-caret {
  border-color: theme("colors.gray.500") transparent transparent;
  color: theme("colors.gray.600");
}

.multiselect-clear {
  @apply text-gray-400 dark:text-gray-600;
  position: absolute;
  top: 0;
  right: 0;
  height: 36px;
  width: 32px;
  background: 0;
  border: 0;
  cursor: pointer;
}

.multiselect-clear:hover,
.multiselect-clear:active,
.multiselect-clear:focus {
  @apply text-gray-900 dark:text-gray-100;
}

.dropdown-list {
  position: absolute;
  background: theme("colors.white");
  padding: 0;
  border: 1px solid theme("colors.blue.400");
  border-radius: 0 0 4px 4px;
  width: calc(100% + 2px);
  overflow-y: auto;
  left: -1px;
  z-index: 1000;
}

.dark .dropdown-list {
  border: 1px solid theme("colors.blue.600");
  background: theme("colors.gray.700");
}

.open:not(.up) .dropdown-list {
  border-top: 0;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.175);
}

.showResults.open:not(.up) .dropdown-list {
  border-top: 1px solid theme("colors.gray.300");
}

.dark .showResults.open:not(.up) .dropdown-list {
  border-top: 1px solid theme("colors.gray.700");
}

.open.up .dropdown-list {
  border-bottom: 0;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.175);
}

.showResults.open.up .dropdown-list {
  border-bottom: 1px solid theme("colors.gray.300");
}

.dark .showResults.open.up .dropdown-list {
  border-bottom: 1px solid theme("colors.gray.700");
}

.dropdown-list-item {
  padding: 4px 8px;
}

.dropdown-list-item.active {
  background: theme("colors.blue.500");
  color: theme("colors.white");
}

.dropdown-list-item.selected {
  background: theme("colors.gray.100");
  color: theme("colors.gray.300");
}

.dark .dropdown-list-item.selected {
  background: theme("colors.gray.600");
  color: theme("colors.gray.800");
}

.dropdown-list-item.active.selected {
  background: theme("colors.gray.300");
  color: theme("colors.gray.600");
}

.dark .dropdown-list-item.active.selected {
  background: theme("colors.gray.500");
  color: theme("colors.gray.700");
}

.dropdown-list-item.loading {
  color: theme("colors.gray.600");
}

.dark .dropdown-list-item.loading {
  color: theme("colors.gray.400");
}

.tag-list,
.dropdown-list {
  list-style: none;
  margin: 0;
}

.tag-list {
  display: block;
  padding: 2px 4px;
}

.hideCaret .tag-list,
.showClear .tag-list {
  margin-right: 26px;
}

.tag-list-item {
  display: inline-block;
  border: 1px solid theme("colors.gray.300");
  background: theme("colors.white");
  border-radius: 4px;
  padding: 0 6px;
  margin: 3px 4px;
  cursor: pointer;
}

.dark .tag-list-item {
  border: 1px solid theme("colors.gray.500");
  background: theme("colors.gray.700");
}

.tag-list-item .remove {
  border: 0;
  background: 0;
  color: theme("colors.gray.300");
  cursor: pointer;
  margin: 0;
  padding: 0 3px 0 0;
  font-weight: bold;
}

.dark .tag-list-item .remove {
  color: theme("colors.gray.100");
}

.tag-list-item .remove:hover,
.tag-list-item .remove:active,
.tag-list-item .remove:focus {
  @apply text-gray-900 dark:text-gray-300;
}

.tag-list.single {
  width: 100%;
}

.hideCaret:not(.hasTags) .tag-list.single {
  width: auto;
}

.tag-list.single .tag-list-item:not(.input) {
  border: 0;
  padding: 0;
  background: 0;
}

.tag-list-item.input {
  border: none;
  margin: 0;
  padding: 4px;
  cursor: pointer;
  background: transparent;
}

.tag-list-item.input input {
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: transparent;
}

.tag-list-item.input input:focus {
  outline: none;
}

.tag-list-item.input input::-ms-clear {
  display: none;
}

.tag-list-item.input input::placeholder {
  @apply italic;
}

.dark .tag-list-item.input input::placeholder {
  @apply text-gray-600 bg-opacity-50;
}

.open.hasTags.canSearch .single .tag-list-item.input input {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  border: 1px solid theme("colors.gray.300");
  border-radius: 4px;
  padding: 4px;
}

.dark .open.hasTags.canSearch .single .tag-list-item.input input {
  border: 1px solid theme("colors.gray.700");
}

.hasTags:not(.open) .single .tag-list-item.input input {
  opacity: 0;
  margin-left: -9999px;
}

.faux-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  height: auto;
  width: auto;
  white-space: nowrap;
  margin: 0;
  padding: 0;
}
</style>
