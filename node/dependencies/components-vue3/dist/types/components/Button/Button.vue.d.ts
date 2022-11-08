import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"" | "default" | "primary" | "danger" | "light" | "success">;
        default: string;
    };
    /**
     * Determines the size.
     */
    size: {
        type: PropType<"" | "md" | "sm">;
        default: string;
    };
    /**
     * Determines whether to use the outline styling or not.
     */
    outline: {
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
     * Determines whether to use the block styling or not.
     */
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    btnClass(): "" | "btn";
    variantClass(): "" | "btn-default" | "btn-primary" | "btn-success" | "btn-danger" | "btn-light";
    sizeClass(): "" | "btn-sm";
    outlineClass(): "" | "btn-outline";
    disabledClass(): "" | "disabled";
    blockClass(): "" | "btn-block";
}, {
    onClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"" | "default" | "primary" | "danger" | "light" | "success">;
        default: string;
    };
    /**
     * Determines the size.
     */
    size: {
        type: PropType<"" | "md" | "sm">;
        default: string;
    };
    /**
     * Determines whether to use the outline styling or not.
     */
    outline: {
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
     * Determines whether to use the block styling or not.
     */
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    variant: "" | "default" | "primary" | "danger" | "light" | "success";
    size: "" | "md" | "sm";
    outline: boolean;
    block: boolean;
}>;
export default _default;
