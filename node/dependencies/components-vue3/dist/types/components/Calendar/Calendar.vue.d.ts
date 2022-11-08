import { PropType, nextTick } from 'vue';
export declare type CalendarDate = Date | null;
export interface CalendarRange {
    start: CalendarDate;
    end: CalendarDate;
}
export declare type CalendarMode = 'date' | 'dateTime' | 'time';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            modelValue: CalendarDate | CalendarRange;
            mode: CalendarMode;
            min: CalendarDate;
            max: CalendarDate;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             * The v-model for the component.
             *
             * For single selections, this value can be null or a date object.
             *
             * For range selections, this is an object with start and end keys
             * that can either be null or a date object.
             *
             * Range example:
             *
             * **{ start: new Date(), end: null }**
             */
            modelValue: {
                type: PropType<CalendarDate | CalendarRange>;
                default: Date;
            };
            /**
             * Determines the mode in which the calendar will function.
             *
             * Options include 'date', 'dateTime', and 'time'.
             */
            mode: {
                type: PropType<CalendarMode>;
                default: string;
            };
            /**
             * Determines the minimum selectable date for this component.
             */
            min: {
                type: PropType<CalendarDate>;
                default: null;
            };
            /**
             * Determines the maximum selectable date for this component.
             */
            max: {
                type: PropType<CalendarDate>;
                default: null;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "modelValue" | "mode" | "min" | "max">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            /**
             * The v-model for the component.
             *
             * For single selections, this value can be null or a date object.
             *
             * For range selections, this is an object with start and end keys
             * that can either be null or a date object.
             *
             * Range example:
             *
             * **{ start: new Date(), end: null }**
             */
            modelValue: {
                type: PropType<CalendarDate | CalendarRange>;
                default: Date;
            };
            /**
             * Determines the mode in which the calendar will function.
             *
             * Options include 'date', 'dateTime', and 'time'.
             */
            mode: {
                type: PropType<CalendarMode>;
                default: string;
            };
            /**
             * Determines the minimum selectable date for this component.
             */
            min: {
                type: PropType<CalendarDate>;
                default: null;
            };
            /**
             * Determines the maximum selectable date for this component.
             */
            max: {
                type: PropType<CalendarDate>;
                default: null;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
            modelValue: CalendarDate | CalendarRange;
            mode: CalendarMode;
            min: CalendarDate;
            max: CalendarDate;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        /**
         * The v-model for the component.
         *
         * For single selections, this value can be null or a date object.
         *
         * For range selections, this is an object with start and end keys
         * that can either be null or a date object.
         *
         * Range example:
         *
         * **{ start: new Date(), end: null }**
         */
        modelValue: {
            type: PropType<CalendarDate | CalendarRange>;
            default: Date;
        };
        /**
         * Determines the mode in which the calendar will function.
         *
         * Options include 'date', 'dateTime', and 'time'.
         */
        mode: {
            type: PropType<CalendarMode>;
            default: string;
        };
        /**
         * Determines the minimum selectable date for this component.
         */
        min: {
            type: PropType<CalendarDate>;
            default: null;
        };
        /**
         * Determines the maximum selectable date for this component.
         */
        max: {
            type: PropType<CalendarDate>;
            default: null;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model for the component.
     *
     * For single selections, this value can be null or a date object.
     *
     * For range selections, this is an object with start and end keys
     * that can either be null or a date object.
     *
     * Range example:
     *
     * **{ start: new Date(), end: null }**
     */
    modelValue: {
        type: PropType<CalendarDate | CalendarRange>;
        default: Date;
    };
    /**
     * Determines the mode in which the calendar will function.
     *
     * Options include 'date', 'dateTime', and 'time'.
     */
    mode: {
        type: PropType<CalendarMode>;
        default: string;
    };
    /**
     * Determines the minimum selectable date for this component.
     */
    min: {
        type: PropType<CalendarDate>;
        default: null;
    };
    /**
     * Determines the maximum selectable date for this component.
     */
    max: {
        type: PropType<CalendarDate>;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
    modelValue: CalendarDate | CalendarRange;
    mode: CalendarMode;
    min: CalendarDate;
    max: CalendarDate;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
export default _default;
