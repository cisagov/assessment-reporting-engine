import { PropType } from 'vue';
declare type SelectModel = boolean | string | number | null;
interface SelectOption {
    id: number | string;
    value: number | string;
    text: string;
}
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly: boolean;
            modelValue: SelectModel;
            disabled: boolean;
            size: "" | "md" | "sm";
            options: SelectOption[];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             * The v-model of the component.
             */
            modelValue: {
                type: PropType<SelectModel>;
                default: null;
            };
            /**
             * The options for the component.
             *
             * Expects: `{ id, value, text }`
             */
            options: {
                type: PropType<SelectOption[]>;
                default: () => never[];
            };
            /**
             * Disables the component to prevent user interaction.
             */
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Determines if the component is read-only.
             */
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Determines the size of the component.
             */
            size: {
                type: PropType<"" | "md" | "sm">;
                default: string;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "readonly" | "modelValue" | "disabled" | "size" | "options">;
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
             * The v-model of the component.
             */
            modelValue: {
                type: PropType<SelectModel>;
                default: null;
            };
            /**
             * The options for the component.
             *
             * Expects: `{ id, value, text }`
             */
            options: {
                type: PropType<SelectOption[]>;
                default: () => never[];
            };
            /**
             * Disables the component to prevent user interaction.
             */
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Determines if the component is read-only.
             */
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Determines the size of the component.
             */
            size: {
                type: PropType<"" | "md" | "sm">;
                default: string;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
            readonly: boolean;
            modelValue: SelectModel;
            disabled: boolean;
            size: "" | "md" | "sm";
            options: SelectOption[];
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
         * The v-model of the component.
         */
        modelValue: {
            type: PropType<SelectModel>;
            default: null;
        };
        /**
         * The options for the component.
         *
         * Expects: `{ id, value, text }`
         */
        options: {
            type: PropType<SelectOption[]>;
            default: () => never[];
        };
        /**
         * Disables the component to prevent user interaction.
         */
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Determines if the component is read-only.
         */
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Determines the size of the component.
         */
        size: {
            type: PropType<"" | "md" | "sm">;
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model of the component.
     */
    modelValue: {
        type: PropType<SelectModel>;
        default: null;
    };
    /**
     * The options for the component.
     *
     * Expects: `{ id, value, text }`
     */
    options: {
        type: PropType<SelectOption[]>;
        default: () => never[];
    };
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the component is read-only.
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the size of the component.
     */
    size: {
        type: PropType<"" | "md" | "sm">;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
    readonly: boolean;
    modelValue: SelectModel;
    disabled: boolean;
    size: "" | "md" | "sm";
    options: SelectOption[];
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
export default _default;
