import { PropType } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            label: string;
            modelValue: string | number;
            variant: "gray" | "tan" | "yellow" | "orange" | "pink" | "red" | "purple" | "indigo" | "blue" | "teal" | "green";
            size: "md" | "sm" | "lg";
            context: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Determines the content of the default slot.
             *
             * This is overridden if the default slot is present.
             */
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
                default: null;
            };
            /**
             * Determines the content of the label slot.
             *
             * This is overridden if the label slot is present.
             */
            label: {
                type: StringConstructor;
                default: null;
            };
            /**
             * Determines the content of the context slot.
             *
             * This is overridden if the context slot is present.
             */
            context: {
                type: StringConstructor;
                default: null;
            };
            /**
             * Determines the overall look and feel of the component.
             */
            size: {
                type: PropType<"md" | "sm" | "lg">;
                default: string;
            };
            /**
             * Determines the theme color of the component.
             */
            variant: {
                type: PropType<"gray" | "tan" | "yellow" | "orange" | "pink" | "red" | "purple" | "indigo" | "blue" | "teal" | "green">;
                default: null;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "label" | "modelValue" | "variant" | "size" | "context">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Determines the content of the default slot.
             *
             * This is overridden if the default slot is present.
             */
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
                default: null;
            };
            /**
             * Determines the content of the label slot.
             *
             * This is overridden if the label slot is present.
             */
            label: {
                type: StringConstructor;
                default: null;
            };
            /**
             * Determines the content of the context slot.
             *
             * This is overridden if the context slot is present.
             */
            context: {
                type: StringConstructor;
                default: null;
            };
            /**
             * Determines the overall look and feel of the component.
             */
            size: {
                type: PropType<"md" | "sm" | "lg">;
                default: string;
            };
            /**
             * Determines the theme color of the component.
             */
            variant: {
                type: PropType<"gray" | "tan" | "yellow" | "orange" | "pink" | "red" | "purple" | "indigo" | "blue" | "teal" | "green">;
                default: null;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            label: string;
            modelValue: string | number;
            variant: "gray" | "tan" | "yellow" | "orange" | "pink" | "red" | "purple" | "indigo" | "blue" | "teal" | "green";
            size: "md" | "sm" | "lg";
            context: string;
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
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        /**
         * Determines the content of the default slot.
         *
         * This is overridden if the default slot is present.
         */
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        /**
         * Determines the content of the label slot.
         *
         * This is overridden if the label slot is present.
         */
        label: {
            type: StringConstructor;
            default: null;
        };
        /**
         * Determines the content of the context slot.
         *
         * This is overridden if the context slot is present.
         */
        context: {
            type: StringConstructor;
            default: null;
        };
        /**
         * Determines the overall look and feel of the component.
         */
        size: {
            type: PropType<"md" | "sm" | "lg">;
            default: string;
        };
        /**
         * Determines the theme color of the component.
         */
        variant: {
            type: PropType<"gray" | "tan" | "yellow" | "orange" | "pink" | "red" | "purple" | "indigo" | "blue" | "teal" | "green">;
            default: null;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * Determines the content of the default slot.
     *
     * This is overridden if the default slot is present.
     */
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    /**
     * Determines the content of the label slot.
     *
     * This is overridden if the label slot is present.
     */
    label: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Determines the content of the context slot.
     *
     * This is overridden if the context slot is present.
     */
    context: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Determines the overall look and feel of the component.
     */
    size: {
        type: PropType<"md" | "sm" | "lg">;
        default: string;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"gray" | "tan" | "yellow" | "orange" | "pink" | "red" | "purple" | "indigo" | "blue" | "teal" | "green">;
        default: null;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    label: string;
    modelValue: string | number;
    variant: "gray" | "tan" | "yellow" | "orange" | "pink" | "red" | "purple" | "indigo" | "blue" | "teal" | "green";
    size: "md" | "sm" | "lg";
    context: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        label: (_: {}) => any;
        default: (_: {}) => any;
        context: (_: {}) => any;
    };
});
export default _default;
