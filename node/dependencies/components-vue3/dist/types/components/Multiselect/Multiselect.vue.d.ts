import { PropType } from "vue";
interface MultiselectOption {
    [id: string | number]: any;
}
interface MultiselectTag {
    [id: string | number]: any;
    isNewTag?: boolean;
}
declare const _default: import("vue").DefineComponent<{
    /**
     * An array of the selected options.
     */
    selected: {
        type: PropType<MultiselectOption[]>;
        default: () => never[];
    };
    /**
     * An array of options that can be selected.
     */
    options: {
        type: PropType<MultiselectOption[]>;
        default: () => never[];
    };
    /**
     * The key used for an option's value.
     *
     * Be careful when setting this as it can trigger `undefined`
     * errors if it doesn't exist in the options object.
     */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The key used for an option's label.
     *
     * Be careful when setting this as it can trigger `undefined`
     * and `trim()` errors if it doesn't exist in the options object.
     */
    labelKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The v-model that determines the text value of the input field.
     */
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to enable autofocus or not.
     */
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether more than one option can be selected.
     */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the required state of the component.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the loading state of the component.
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The message displayed while loading is true.
     */
    loadingMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The message that displays when the menu is initially opened.
     */
    defaultMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The message that displays when there are no results returned from a lookup.
     */
    noResultsMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The message that displays when you cannot select more items.
     */
    cannotAddResultsMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The message that displays when the user enters invalid text.
     */
    invalidInputMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to show or hide your selections as tags inside the input field.
     */
    hideTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether you can loop through the menu's options with the arrow keys
     * (e.g., pressing down on that last result sends you to the first result).
     */
    canLoopOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if options can be toggled when selected from the options list.
     */
    toggleSelectedOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if selected options should appear in the options list.
     */
    hideSelectedOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to close the menu on selection.
     */
    closeOnSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the component allows for searching.
     */
    canSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to remove the last selection.
     */
    disableRemoveLastSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the input should be cleared after making a selection.
     */
    clearInputOnSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the options list should be purged on selection.
     */
    clearOptionsOnSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the placeholder of the input.
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines the position of the menu.
     */
    openDirection: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines the max height of the open menu.
     */
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to hide the caret or not.
     */
    hideCaret: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to show the clear field button or not.
     */
    showClear: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whehther the multiselect will accept new values from the input.
     */
    taggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the maxlength of the input field.
     */
    maxlength: {
        type: PropType<number | undefined>;
        default: undefined;
    };
    /**
     * Determines the max number of items that can be selected.
     */
    maxItems: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines if new tags are forced to be lowercase.
     */
    enforceLowercaseNewTag: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    debouncePositionDropdown: EventListener | null;
    isOpen: boolean;
    active: boolean;
    inputWidth: string | number;
    arrowCounter: number;
    bottom: string;
    dropUp: boolean;
}, {
    showDropdown(): boolean;
    showLoading(): boolean;
    showResults(): boolean;
    showDefault(): boolean;
    showNoResults(): boolean;
    showPlaceholder(): boolean;
    showCannotAddResults(): boolean;
    showInvalidInput(): boolean;
    canAddItem(): boolean;
    isReadonlyInput(): boolean;
    isCleanInput(): boolean;
    trimmedValue(): string;
    filteredOptions(): MultiselectOption[];
    newTag(): MultiselectTag;
}, {
    detectHtml(str: string): boolean;
    selectText(): void;
    search($event: Event): void;
    resizeInput(): void;
    removeLastSelection(): void;
    add(selection: MultiselectOption): void;
    remove(selection: MultiselectOption): void;
    isSelectedOption(option: MultiselectOption): boolean;
    focusInput(): void;
    clearInput(): void;
    clearSelected(): void;
    clearOptions(): void;
    input(value: string): void;
    updateSelected(s: MultiselectOption[]): void;
    updateOptions(s: MultiselectOption[]): void;
    open(): void;
    close(): void;
    handleClearBtn(): void;
    handleArrows(direction: string): void;
    handleDropdownScroll(jumpToLast?: boolean): void;
    handleKeyUp($event: KeyboardEvent): void;
    handleKeyDown($event: KeyboardEvent): void;
    handleMouseUp(): void;
    handleCloseOnSelection(): void;
    handleOutsideClick($event: MouseEvent): void;
    handleOutsideKeyUp($event: KeyboardEvent): void;
    positionDropdown(): void;
    handleEsc(): void;
    handleRequired(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "close" | "focus" | "update-selected" | "update-options" | "open")[], "update:modelValue" | "close" | "focus" | "open" | "update-selected" | "update-options", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * An array of the selected options.
     */
    selected: {
        type: PropType<MultiselectOption[]>;
        default: () => never[];
    };
    /**
     * An array of options that can be selected.
     */
    options: {
        type: PropType<MultiselectOption[]>;
        default: () => never[];
    };
    /**
     * The key used for an option's value.
     *
     * Be careful when setting this as it can trigger `undefined`
     * errors if it doesn't exist in the options object.
     */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The key used for an option's label.
     *
     * Be careful when setting this as it can trigger `undefined`
     * and `trim()` errors if it doesn't exist in the options object.
     */
    labelKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The v-model that determines the text value of the input field.
     */
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to enable autofocus or not.
     */
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether more than one option can be selected.
     */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the required state of the component.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the loading state of the component.
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The message displayed while loading is true.
     */
    loadingMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The message that displays when the menu is initially opened.
     */
    defaultMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The message that displays when there are no results returned from a lookup.
     */
    noResultsMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The message that displays when you cannot select more items.
     */
    cannotAddResultsMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The message that displays when the user enters invalid text.
     */
    invalidInputMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to show or hide your selections as tags inside the input field.
     */
    hideTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether you can loop through the menu's options with the arrow keys
     * (e.g., pressing down on that last result sends you to the first result).
     */
    canLoopOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if options can be toggled when selected from the options list.
     */
    toggleSelectedOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if selected options should appear in the options list.
     */
    hideSelectedOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to close the menu on selection.
     */
    closeOnSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the component allows for searching.
     */
    canSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to remove the last selection.
     */
    disableRemoveLastSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the input should be cleared after making a selection.
     */
    clearInputOnSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the options list should be purged on selection.
     */
    clearOptionsOnSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the placeholder of the input.
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines the position of the menu.
     */
    openDirection: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines the max height of the open menu.
     */
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to hide the caret or not.
     */
    hideCaret: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to show the clear field button or not.
     */
    showClear: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whehther the multiselect will accept new values from the input.
     */
    taggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the maxlength of the input field.
     */
    maxlength: {
        type: PropType<number | undefined>;
        default: undefined;
    };
    /**
     * Determines the max number of items that can be selected.
     */
    maxItems: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines if new tags are forced to be lowercase.
     */
    enforceLowercaseNewTag: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate-selected"?: ((...args: any[]) => any) | undefined;
    "onUpdate-options"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    placeholder: string;
    disabled: boolean;
    maxlength: number | undefined;
    autofocus: boolean;
    required: boolean;
    loading: boolean;
    options: MultiselectOption[];
    multiple: boolean;
    selected: MultiselectOption[];
    valueKey: string;
    labelKey: string;
    loadingMsg: string;
    defaultMsg: string;
    noResultsMsg: string;
    cannotAddResultsMsg: string;
    invalidInputMsg: string;
    hideTags: boolean;
    canLoopOptions: boolean;
    toggleSelectedOptions: boolean;
    hideSelectedOptions: boolean;
    closeOnSelection: boolean;
    canSearch: boolean;
    disableRemoveLastSelection: boolean;
    clearInputOnSelection: boolean;
    clearOptionsOnSelection: boolean;
    openDirection: string;
    maxHeight: number;
    hideCaret: boolean;
    showClear: boolean;
    taggable: boolean;
    maxItems: number;
    enforceLowercaseNewTag: boolean;
}>;
export default _default;
