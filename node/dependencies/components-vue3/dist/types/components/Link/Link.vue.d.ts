import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"" | "primary" | "danger" | "light" | "dark" | "secondary" | "tertiary">;
        default: string;
    };
    /**
     * Applies the appropriate attributes for external links.
     */
    external: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Gives the link a "Call to Action" styling.
     */
    cta: {
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
}, {
    linkClass: import("vue").ComputedRef<"" | "link">;
    variantClass: import("vue").ComputedRef<"" | "link-primary" | "link-secondary" | "link-tertiary" | "link-danger" | "link-light" | "link-dark">;
    ctaClass: import("vue").ComputedRef<"" | "link-cta">;
    disabledClass: import("vue").ComputedRef<"" | "disabled">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"" | "primary" | "danger" | "light" | "dark" | "secondary" | "tertiary">;
        default: string;
    };
    /**
     * Applies the appropriate attributes for external links.
     */
    external: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Gives the link a "Call to Action" styling.
     */
    cta: {
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
}>>, {
    disabled: boolean;
    variant: "" | "primary" | "danger" | "light" | "dark" | "secondary" | "tertiary";
    external: boolean;
    cta: boolean;
}>;
export default _default;
