import { PropType } from 'vue';
interface ITab {
    key: string;
    tag?: 'button' | 'a';
    title?: string;
    href?: string;
    align?: 'left' | 'right' | 'center';
    external?: boolean;
    active?: boolean;
    disabled?: boolean;
}
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            modelValue: ITab[];
            type: "block" | "folder" | "underline";
            willChangeTab: Function;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Determines the array of tab objects.
             *
             * Format of tab object:
             *
             * ```
             * {
             *   key: string
             *   tag?: 'button' | 'a'
             *   title?: string
             *   href?: string
             *   align?: 'left' | 'right' | 'center'
             *   external?: boolean
             *   active?: boolean
             *   disabled?: boolean
             * }
             * ```
             */
            modelValue: {
                type: PropType<ITab[]>;
                default: () => never[];
            };
            /**
             * The overall look and feel of the component.
             */
            type: {
                type: PropType<"block" | "folder" | "underline">;
                default: string;
            };
            /**
             * Allows for code execution prior to changing tabs.
             *
             * Provides the selected `tab` for general use.
             *
             * Must call an `open()` callback to complete the process.
             *
             * A `cancel()` callback can be called to cancel
             * the process.
             *
             * Example definition in parent component:
             *
             * ```
             * async willChangeTab(tab, open, cancel) {
             *  try {
             *    await SOME_API_CALL_RESPONSE()
             *    console.log(tab)
             *    // let the open process continue
             *    open()
             *  } catch (e) {
             *    // cancel the open process
             *    cancel()
             *  }
             * }
             * ```
             */
            willChangeTab: {
                type: FunctionConstructor;
                default: null;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "modelValue" | "type" | "willChangeTab">;
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
        $emit: (event: "change" | "update:model-value", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Determines the array of tab objects.
             *
             * Format of tab object:
             *
             * ```
             * {
             *   key: string
             *   tag?: 'button' | 'a'
             *   title?: string
             *   href?: string
             *   align?: 'left' | 'right' | 'center'
             *   external?: boolean
             *   active?: boolean
             *   disabled?: boolean
             * }
             * ```
             */
            modelValue: {
                type: PropType<ITab[]>;
                default: () => never[];
            };
            /**
             * The overall look and feel of the component.
             */
            type: {
                type: PropType<"block" | "folder" | "underline">;
                default: string;
            };
            /**
             * Allows for code execution prior to changing tabs.
             *
             * Provides the selected `tab` for general use.
             *
             * Must call an `open()` callback to complete the process.
             *
             * A `cancel()` callback can be called to cancel
             * the process.
             *
             * Example definition in parent component:
             *
             * ```
             * async willChangeTab(tab, open, cancel) {
             *  try {
             *    await SOME_API_CALL_RESPONSE()
             *    console.log(tab)
             *    // let the open process continue
             *    open()
             *  } catch (e) {
             *    // cancel the open process
             *    cancel()
             *  }
             * }
             * ```
             */
            willChangeTab: {
                type: FunctionConstructor;
                default: null;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:model-value")[], string, {
            modelValue: ITab[];
            type: "block" | "folder" | "underline";
            willChangeTab: Function;
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
         * Determines the array of tab objects.
         *
         * Format of tab object:
         *
         * ```
         * {
         *   key: string
         *   tag?: 'button' | 'a'
         *   title?: string
         *   href?: string
         *   align?: 'left' | 'right' | 'center'
         *   external?: boolean
         *   active?: boolean
         *   disabled?: boolean
         * }
         * ```
         */
        modelValue: {
            type: PropType<ITab[]>;
            default: () => never[];
        };
        /**
         * The overall look and feel of the component.
         */
        type: {
            type: PropType<"block" | "folder" | "underline">;
            default: string;
        };
        /**
         * Allows for code execution prior to changing tabs.
         *
         * Provides the selected `tab` for general use.
         *
         * Must call an `open()` callback to complete the process.
         *
         * A `cancel()` callback can be called to cancel
         * the process.
         *
         * Example definition in parent component:
         *
         * ```
         * async willChangeTab(tab, open, cancel) {
         *  try {
         *    await SOME_API_CALL_RESPONSE()
         *    console.log(tab)
         *    // let the open process continue
         *    open()
         *  } catch (e) {
         *    // cancel the open process
         *    cancel()
         *  }
         * }
         * ```
         */
        willChangeTab: {
            type: FunctionConstructor;
            default: null;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * Determines the array of tab objects.
     *
     * Format of tab object:
     *
     * ```
     * {
     *   key: string
     *   tag?: 'button' | 'a'
     *   title?: string
     *   href?: string
     *   align?: 'left' | 'right' | 'center'
     *   external?: boolean
     *   active?: boolean
     *   disabled?: boolean
     * }
     * ```
     */
    modelValue: {
        type: PropType<ITab[]>;
        default: () => never[];
    };
    /**
     * The overall look and feel of the component.
     */
    type: {
        type: PropType<"block" | "folder" | "underline">;
        default: string;
    };
    /**
     * Allows for code execution prior to changing tabs.
     *
     * Provides the selected `tab` for general use.
     *
     * Must call an `open()` callback to complete the process.
     *
     * A `cancel()` callback can be called to cancel
     * the process.
     *
     * Example definition in parent component:
     *
     * ```
     * async willChangeTab(tab, open, cancel) {
     *  try {
     *    await SOME_API_CALL_RESPONSE()
     *    console.log(tab)
     *    // let the open process continue
     *    open()
     *  } catch (e) {
     *    // cancel the open process
     *    cancel()
     *  }
     * }
     * ```
     */
    willChangeTab: {
        type: FunctionConstructor;
        default: null;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:model-value")[], "change" | "update:model-value", {
    modelValue: ITab[];
    type: "block" | "folder" | "underline";
    willChangeTab: Function;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
export default _default;
