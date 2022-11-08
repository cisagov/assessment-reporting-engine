import { PropType } from "vue";
declare type RadioModel = boolean | string | number | null;
interface RadioOption {
    value: string | number | boolean;
    text: string;
}
declare const _default: import("vue").DefineComponent<{
    /**
     * The v-model of the radio group.
     */
    modelValue: {
        type: PropType<RadioModel>;
        default: null;
    };
    /**
     * The name of the radio form field.
     */
    name: {
        type: StringConstructor;
        default: null;
    };
    /**
     * An array of options for the radio group.
     */
    options: {
        type: PropType<RadioOption[]>;
        default: () => never[];
    };
    /**
     * Determines whether the radio group is required or not.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the options are stacked vertically or horizontally.
     */
    stacked: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    id: string;
}, {
    localChecked: {
        get(): RadioModel;
        set(value: RadioModel): void;
    };
}, {
    onChange(value: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model of the radio group.
     */
    modelValue: {
        type: PropType<RadioModel>;
        default: null;
    };
    /**
     * The name of the radio form field.
     */
    name: {
        type: StringConstructor;
        default: null;
    };
    /**
     * An array of options for the radio group.
     */
    options: {
        type: PropType<RadioOption[]>;
        default: () => never[];
    };
    /**
     * Determines whether the radio group is required or not.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the options are stacked vertically or horizontally.
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
    modelValue: RadioModel;
    required: boolean;
    options: RadioOption[];
    stacked: boolean;
}>;
export default _default;
