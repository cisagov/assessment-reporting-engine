import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    /**
     * The v-model state of this component. Determines true or false value.
     */
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"default" | "primary" | "danger">;
        default: string;
    };
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    styles: {
        button: string;
        switch: string;
        offIcon: string;
        onIcon: string;
    };
    icons: {
        off: string;
        on: string;
    };
}, {
    isToggled: {
        get(): boolean;
        set(value: boolean): void;
    };
    variantClass(): "bg-blue-500" | "bg-red-500" | "bg-gray-900";
    variantFillClass(): "fill-current text-blue-500" | "fill-current text-red-500" | "fill-current text-gray-900";
}, {
    update(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model state of this component. Determines true or false value.
     */
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"default" | "primary" | "danger">;
        default: string;
    };
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    disabled: boolean;
    variant: "default" | "primary" | "danger";
}>;
export default _default;
