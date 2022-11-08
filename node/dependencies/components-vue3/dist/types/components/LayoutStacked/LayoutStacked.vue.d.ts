declare const _default: import("vue").DefineComponent<{
    /**
     * Determines whether to make the header sticky or not.
     */
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to make the footer sticky or not.
     */
    stickyFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    hasHeaderSlot(): Boolean;
    hasFooterSlot(): Boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Determines whether to make the header sticky or not.
     */
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to make the footer sticky or not.
     */
    stickyFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    stickyHeader: boolean;
    stickyFooter: boolean;
}>;
export default _default;
