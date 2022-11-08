declare const _default: import("vue").DefineComponent<{
    /**
     * The current count value.
     */
    currentValue: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The maximum value allowed.
     */
    maxValue: {
        type: NumberConstructor;
        default: number;
    };
}, {
    count: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The current count value.
     */
    currentValue: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The maximum value allowed.
     */
    maxValue: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    currentValue: number;
    maxValue: number;
}>;
export default _default;
