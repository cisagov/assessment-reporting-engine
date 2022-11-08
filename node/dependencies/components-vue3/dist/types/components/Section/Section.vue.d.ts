declare const _default: import("vue").DefineComponent<{
    /**
     * Determines the overall look and feel of the section.
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines if the header is hidden or shown.
     */
    hideHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the content is hidden or shown.
     */
    hideContent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The class list for the nav slot.
     */
    navClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The class list of the default slot.
     */
    contentClass: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    hasTitleSlot(): boolean;
    hasSubtitleSlot(): boolean;
    hasNavSlot(): boolean;
    hasDefaultSlot(): boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Determines the overall look and feel of the section.
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines if the header is hidden or shown.
     */
    hideHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the content is hidden or shown.
     */
    hideContent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The class list for the nav slot.
     */
    navClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The class list of the default slot.
     */
    contentClass: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    type: string;
    hideHeader: boolean;
    hideContent: boolean;
    navClass: string;
    contentClass: string;
}>;
export default _default;
