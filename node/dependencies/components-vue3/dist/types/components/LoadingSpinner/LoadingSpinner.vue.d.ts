import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    /**
     * Sets the size of the spinner.
     */
    size: {
        type: PropType<"" | "md" | "sm" | "lg" | "auto">;
        default: string;
    };
    /**
     * Sets the accessiblity label for the spinner.
     */
    label: {
        type: StringConstructor;
        default: null;
    };
}, unknown, unknown, {
    sizeClass(): "" | "h-20 w-20" | "h-4 w-4" | "h-12 w-12";
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Sets the size of the spinner.
     */
    size: {
        type: PropType<"" | "md" | "sm" | "lg" | "auto">;
        default: string;
    };
    /**
     * Sets the accessiblity label for the spinner.
     */
    label: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    label: string;
    size: "" | "md" | "sm" | "lg" | "auto";
}>;
export default _default;
