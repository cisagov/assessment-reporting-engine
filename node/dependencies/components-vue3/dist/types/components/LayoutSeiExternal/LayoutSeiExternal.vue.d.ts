declare const _default: import("vue").DefineComponent<{
    /**
     * An object containing various properties that display in the header and masthead.
     */
    page: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Removes the content padding from the default slot section.
     * Useful when you want to custom style the main content section.
     */
    removeContentPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to show the masthead section or not.
     */
    showMasthead: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * An object containing various properties that display in the header and masthead.
     */
    page: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Removes the content padding from the default slot section.
     * Useful when you want to custom style the main content section.
     */
    removeContentPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to show the masthead section or not.
     */
    showMasthead: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    page: Record<string, any>;
    removeContentPadding: boolean;
    showMasthead: boolean;
}>;
export default _default;
