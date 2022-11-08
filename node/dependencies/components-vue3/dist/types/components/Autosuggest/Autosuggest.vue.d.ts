import { PropType } from "vue";
interface AutoSuggestResult {
    term: string;
}
declare const _default: import("vue").DefineComponent<{
    /**
     * The v-model passed from the parent that is used to init the local state "this.q".
     */
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The placeholder for the input.
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines max number of characters allowed in the input box.
     */
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to disable or enable the search button.
     */
    disableSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * A function that is triggered when autosuggest should occur.
     */
    autosuggest: {
        type: FunctionConstructor;
        default: () => void;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"default" | "primary" | "danger">;
        default: string;
    };
    /**
     * The items used by autosuggest.
     */
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * The character threshold before autosuggest kicks in.
     */
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to autofocus the input.
     */
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the component should use its built-in search query highlighting feature.
     */
    useBuiltInHighlighting: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    originalQ: string;
    loading: boolean;
    isOpen: boolean;
    preventDisplay: boolean;
    results: never[];
    arrowCounter: number;
}, {
    q: {
        get(): string;
        set(val: string): void;
    };
    metThreshold(): boolean;
    variantClass(): "btn btn-default text-primary dark:text-blue-400" | "btn btn-default text-danger dark:text-red-400" | "btn btn-default text-secondary dark:text-gray-300";
}, {
    formatTerm(text: string): string;
    filterResults(): void;
    resultWithHightlight(result: AutoSuggestResult): string;
    resetDropdown(): void;
    handleChange(): void;
    handleArrows(direction: string): void;
    handleEsc(): void;
    handleClickOutside(evt: MouseEvent): void;
    handleClearSearchBtn(): void;
    handleSearchBtn(): void;
    handleDropdownClick(result: AutoSuggestResult): void;
    handleEnterKeyUp(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "search" | "result")[], "search" | "update:modelValue" | "result", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model passed from the parent that is used to init the local state "this.q".
     */
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The placeholder for the input.
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines max number of characters allowed in the input box.
     */
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to disable or enable the search button.
     */
    disableSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * A function that is triggered when autosuggest should occur.
     */
    autosuggest: {
        type: FunctionConstructor;
        default: () => void;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"default" | "primary" | "danger">;
        default: string;
    };
    /**
     * The items used by autosuggest.
     */
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * The character threshold before autosuggest kicks in.
     */
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to autofocus the input.
     */
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the component should use its built-in search query highlighting feature.
     */
    useBuiltInHighlighting: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
    onResult?: ((...args: any[]) => any) | undefined;
}, {
    items: unknown[];
    modelValue: string;
    placeholder: string;
    disabled: boolean;
    maxlength: number;
    disableSearch: boolean;
    autosuggest: Function;
    variant: "default" | "primary" | "danger";
    threshold: number;
    autofocus: boolean;
    useBuiltInHighlighting: boolean;
}>;
export default _default;
