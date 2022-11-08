import { PropType } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            items: {
                id: string;
                text: string;
            }[];
            parent: string;
            itemClass: string;
            activeClass: string;
            inactiveClass: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Determines the items list that is observed when the page scrolls.
             *
             * This accepts an array of objects.
             *
             * Example object:
             *
             * `{ id: string, text: string }`
             *
             * The object's `id` property should be a unique id for an HTML element. For example,
             * if you want the item to observe `<div id="test">`, the `id` would
             * be `test`.
             *
             * The object's `text` property should be the content of the link that is observing
             * the page.
             */
            items: {
                type: PropType<{
                    id: string;
                    text: string;
                }[]>;
                default: () => never[];
            };
            /**
             * The HTML selector of the container for the element being spied upon.
             */
            parent: {
                type: StringConstructor;
                default: undefined;
            };
            /**
             * Determines the CSS class list for each item.
             */
            itemClass: {
                type: StringConstructor;
                default: string;
            };
            /**
             * Determines the CSS class list for the active item.
             */
            activeClass: {
                type: StringConstructor;
                default: string;
            };
            /**
             * Determines the CSS class list for the inactive items.
             */
            inactiveClass: {
                type: StringConstructor;
                default: string;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "items" | "parent" | "itemClass" | "activeClass" | "inactiveClass">;
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
             * Determines the items list that is observed when the page scrolls.
             *
             * This accepts an array of objects.
             *
             * Example object:
             *
             * `{ id: string, text: string }`
             *
             * The object's `id` property should be a unique id for an HTML element. For example,
             * if you want the item to observe `<div id="test">`, the `id` would
             * be `test`.
             *
             * The object's `text` property should be the content of the link that is observing
             * the page.
             */
            items: {
                type: PropType<{
                    id: string;
                    text: string;
                }[]>;
                default: () => never[];
            };
            /**
             * The HTML selector of the container for the element being spied upon.
             */
            parent: {
                type: StringConstructor;
                default: undefined;
            };
            /**
             * Determines the CSS class list for each item.
             */
            itemClass: {
                type: StringConstructor;
                default: string;
            };
            /**
             * Determines the CSS class list for the active item.
             */
            activeClass: {
                type: StringConstructor;
                default: string;
            };
            /**
             * Determines the CSS class list for the inactive items.
             */
            inactiveClass: {
                type: StringConstructor;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            items: {
                id: string;
                text: string;
            }[];
            parent: string;
            itemClass: string;
            activeClass: string;
            inactiveClass: string;
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
         * Determines the items list that is observed when the page scrolls.
         *
         * This accepts an array of objects.
         *
         * Example object:
         *
         * `{ id: string, text: string }`
         *
         * The object's `id` property should be a unique id for an HTML element. For example,
         * if you want the item to observe `<div id="test">`, the `id` would
         * be `test`.
         *
         * The object's `text` property should be the content of the link that is observing
         * the page.
         */
        items: {
            type: PropType<{
                id: string;
                text: string;
            }[]>;
            default: () => never[];
        };
        /**
         * The HTML selector of the container for the element being spied upon.
         */
        parent: {
            type: StringConstructor;
            default: undefined;
        };
        /**
         * Determines the CSS class list for each item.
         */
        itemClass: {
            type: StringConstructor;
            default: string;
        };
        /**
         * Determines the CSS class list for the active item.
         */
        activeClass: {
            type: StringConstructor;
            default: string;
        };
        /**
         * Determines the CSS class list for the inactive items.
         */
        inactiveClass: {
            type: StringConstructor;
            default: string;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * Determines the items list that is observed when the page scrolls.
     *
     * This accepts an array of objects.
     *
     * Example object:
     *
     * `{ id: string, text: string }`
     *
     * The object's `id` property should be a unique id for an HTML element. For example,
     * if you want the item to observe `<div id="test">`, the `id` would
     * be `test`.
     *
     * The object's `text` property should be the content of the link that is observing
     * the page.
     */
    items: {
        type: PropType<{
            id: string;
            text: string;
        }[]>;
        default: () => never[];
    };
    /**
     * The HTML selector of the container for the element being spied upon.
     */
    parent: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * Determines the CSS class list for each item.
     */
    itemClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines the CSS class list for the active item.
     */
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines the CSS class list for the inactive items.
     */
    inactiveClass: {
        type: StringConstructor;
        default: string;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    items: {
        id: string;
        text: string;
    }[];
    parent: string;
    itemClass: string;
    activeClass: string;
    inactiveClass: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {
            item: {
                id: string;
                text: string;
            };
        }) => any;
    };
});
export default _default;
