declare const _default: import("vue").DefineComponent<{
    /**
     * The v-model of the component (the text input).
     */
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to display the character counter or not.
     */
    countCharacters: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the maxlength of the component.
     */
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines the placeholder of the component.
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines the type of the input field.
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to autofocus the input or not.
     */
    autofocus: {
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
     * Determines whether the input is required or not.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the input is read-only or not.
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Sets a valid styling if true.
     */
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Sets an invalid styling if true.
     */
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    text: {
        get(): string;
        set(value: string): void;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model of the component (the text input).
     */
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to display the character counter or not.
     */
    countCharacters: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the maxlength of the component.
     */
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines the placeholder of the component.
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines the type of the input field.
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to autofocus the input or not.
     */
    autofocus: {
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
     * Determines whether the input is required or not.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the input is read-only or not.
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Sets a valid styling if true.
     */
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Sets an invalid styling if true.
     */
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    modelValue: string;
    placeholder: string;
    disabled: boolean;
    maxlength: number;
    autofocus: boolean;
    required: boolean;
    type: string;
    invalid: boolean;
    countCharacters: boolean;
    valid: boolean;
}>;
export default _default;
