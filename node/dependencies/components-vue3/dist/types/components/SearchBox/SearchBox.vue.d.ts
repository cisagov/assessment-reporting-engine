import { PropType } from "vue";
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
     * The max amount of characters that can be entered into the input.
     */
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Disables the ability for the component to run a search.
     */
    disableSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"" | "default" | "primary" | "danger">;
        default: string;
    };
    /**
     * Determines if a search should be performed on key up.
     */
    searchOnKeyUp: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determine whether to autofocus the input.
     */
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    q: {
        get(): string;
        set(val: string): void;
    };
    variantClass(): "btn btn-default text-primary dark:text-blue-400" | "btn btn-default text-danger dark:text-red-400" | "btn btn-default text-secondary dark:text-gray-300";
}, {
    clearSearch(): void;
    search(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "search")[], "search" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
     * The max amount of characters that can be entered into the input.
     */
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Disables the ability for the component to run a search.
     */
    disableSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"" | "default" | "primary" | "danger">;
        default: string;
    };
    /**
     * Determines if a search should be performed on key up.
     */
    searchOnKeyUp: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determine whether to autofocus the input.
     */
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    placeholder: string;
    disabled: boolean;
    maxlength: number;
    disableSearch: boolean;
    variant: "" | "default" | "primary" | "danger";
    autofocus: boolean;
    searchOnKeyUp: boolean;
}>;
export default _default;
