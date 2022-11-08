import { PropType } from "vue";
declare type CheckboxGroupOptionValue = string | number | boolean;
interface CheckboxGroupOption {
    value: CheckboxGroupOptionValue;
    text: string;
}
declare const _default: import("vue").DefineComponent<{
    /**
     * The v-model for the checkbox group.
     */
    modelValue: {
        type: PropType<CheckboxGroupOptionValue[]>;
        default: () => never[];
    };
    /**
     * The name for the input form field.
     */
    name: {
        type: StringConstructor;
        default: null;
    };
    /**
     * An array of options available for the checkbox group.
     * Each option should have a `value` and a `text` parameter.
     */
    options: {
        type: PropType<CheckboxGroupOption[]>;
        default: () => never[];
    };
    /**
     * Determines whether this field is required or not.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the options should be stacked vertically or horizontally.
     */
    stacked: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    id: string;
}, {
    localChecked: {
        get(): CheckboxGroupOptionValue[];
        set(value: CheckboxGroupOptionValue): void;
    };
}, {
    onChange(value: CheckboxGroupOptionValue): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model for the checkbox group.
     */
    modelValue: {
        type: PropType<CheckboxGroupOptionValue[]>;
        default: () => never[];
    };
    /**
     * The name for the input form field.
     */
    name: {
        type: StringConstructor;
        default: null;
    };
    /**
     * An array of options available for the checkbox group.
     * Each option should have a `value` and a `text` parameter.
     */
    options: {
        type: PropType<CheckboxGroupOption[]>;
        default: () => never[];
    };
    /**
     * Determines whether this field is required or not.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the options should be stacked vertically or horizontally.
     */
    stacked: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    modelValue: CheckboxGroupOptionValue[];
    required: boolean;
    options: CheckboxGroupOption[];
    stacked: boolean;
}>;
export default _default;
