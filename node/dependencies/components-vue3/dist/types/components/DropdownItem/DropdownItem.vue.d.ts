declare const _default: import("vue").DefineComponent<{
    /**
     * Determines the tag use for the component.
     */
    tag: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to close the parent dropdown when this component is clicked.
     */
    closeOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if this component is currently active.
     */
    active: {
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
    emitter: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Determines the tag use for the component.
     */
    tag: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to close the parent dropdown when this component is clicked.
     */
    closeOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if this component is currently active.
     */
    active: {
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
    active: boolean;
    tag: string;
    closeOnClick: boolean;
}>;
export default _default;
