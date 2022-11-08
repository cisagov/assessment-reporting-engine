import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    /**
     * Determines the id of the component.
     */
    id: {
        type: NumberConstructor;
        required: true;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"danger" | "success" | "info" | "warning">;
        default: string;
    };
    /**
     * Determines the title content of the component.
     */
    title: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Determines the text content of the component.
     */
    text: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Determines the wait time in milliseconds before automatically emitting the "remove" event for this component.
     */
    autoHideDelay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to ignore the autoHideDelay property.
     */
    noAutoHide: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    timer: number | null;
}, {}, {
    removeToast(): void;
    clearTimer(): void;
    setTimer(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove"[], "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Determines the id of the component.
     */
    id: {
        type: NumberConstructor;
        required: true;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"danger" | "success" | "info" | "warning">;
        default: string;
    };
    /**
     * Determines the title content of the component.
     */
    title: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Determines the text content of the component.
     */
    text: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Determines the wait time in milliseconds before automatically emitting the "remove" event for this component.
     */
    autoHideDelay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to ignore the autoHideDelay property.
     */
    noAutoHide: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onRemove?: ((...args: any[]) => any) | undefined;
}, {
    variant: "danger" | "success" | "info" | "warning";
    autoHideDelay: number;
    noAutoHide: boolean;
}>;
export default _default;
