declare const _default: import("vue").DefineComponent<{
    /**
     * The v-model for this component's text input.
     */
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determine whether to display the character counter or not.
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
     * Determines the placeholder text of the component.
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines the row (height) of the component.
     */
    rows: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to autofocus the component or not.
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
     * Determines the required state of the component.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the read-only state of the component.
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Gives the component a valid/success styling.
     */
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Gives the component an invalid/danger styling.
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
     * The v-model for this component's text input.
     */
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determine whether to display the character counter or not.
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
     * Determines the placeholder text of the component.
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines the row (height) of the component.
     */
    rows: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to autofocus the component or not.
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
     * Determines the required state of the component.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the read-only state of the component.
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Gives the component a valid/success styling.
     */
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Gives the component an invalid/danger styling.
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
    invalid: boolean;
    countCharacters: boolean;
    valid: boolean;
    rows: number;
}>;
export default _default;
