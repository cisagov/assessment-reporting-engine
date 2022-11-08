import { PropType, nextTick } from 'vue';
import type { Placement as BasePlacement, Strategy } from '@floating-ui/dom';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            shift: boolean;
            disabled: boolean;
            placement: BasePlacement | "auto" | "auto-start" | "auto-end";
            strategy: Strategy;
            overflowPadding: number;
            arrowPadding: number;
            offset: number;
            inline: boolean;
            disableAnimation: boolean;
            popperClass: string;
            hideArrow: boolean;
            arrowClass: string;
            placementTopArrowClass: string;
            placementRightArrowClass: string;
            placementBottomArrowClass: string;
            placementLeftArrowClass: string;
            willOpen: Function;
            willClose: Function;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            placement: {
                type: PropType<BasePlacement | "auto" | "auto-start" | "auto-end">;
                default: string;
            };
            strategy: {
                type: PropType<Strategy>;
                default: string;
            };
            overflowPadding: {
                type: NumberConstructor;
                default: number;
            };
            arrowPadding: {
                type: NumberConstructor;
                default: number;
            };
            offset: {
                type: NumberConstructor;
                default: number;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
            shift: {
                type: BooleanConstructor;
                default: boolean;
            };
            disableAnimation: {
                type: BooleanConstructor;
                default: boolean;
            };
            popperClass: {
                type: StringConstructor;
                default: undefined;
            };
            hideArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            arrowClass: {
                type: StringConstructor;
                default: undefined;
            };
            placementTopArrowClass: {
                type: StringConstructor;
                default: undefined;
            };
            placementRightArrowClass: {
                type: StringConstructor;
                default: undefined;
            };
            placementBottomArrowClass: {
                type: StringConstructor;
                default: undefined;
            };
            placementLeftArrowClass: {
                type: StringConstructor;
                default: undefined;
            };
            willOpen: {
                type: FunctionConstructor;
                default: null;
            };
            willClose: {
                type: FunctionConstructor;
                default: null;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "shift" | "disabled" | "placement" | "strategy" | "overflowPadding" | "arrowPadding" | "offset" | "inline" | "disableAnimation" | "popperClass" | "hideArrow" | "arrowClass" | "placementTopArrowClass" | "placementRightArrowClass" | "placementBottomArrowClass" | "placementLeftArrowClass" | "willOpen" | "willClose">;
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
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            placement: {
                type: PropType<BasePlacement | "auto" | "auto-start" | "auto-end">;
                default: string;
            };
            strategy: {
                type: PropType<Strategy>;
                default: string;
            };
            overflowPadding: {
                type: NumberConstructor;
                default: number;
            };
            arrowPadding: {
                type: NumberConstructor;
                default: number;
            };
            offset: {
                type: NumberConstructor;
                default: number;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
            shift: {
                type: BooleanConstructor;
                default: boolean;
            };
            disableAnimation: {
                type: BooleanConstructor;
                default: boolean;
            };
            popperClass: {
                type: StringConstructor;
                default: undefined;
            };
            hideArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            arrowClass: {
                type: StringConstructor;
                default: undefined;
            };
            placementTopArrowClass: {
                type: StringConstructor;
                default: undefined;
            };
            placementRightArrowClass: {
                type: StringConstructor;
                default: undefined;
            };
            placementBottomArrowClass: {
                type: StringConstructor;
                default: undefined;
            };
            placementLeftArrowClass: {
                type: StringConstructor;
                default: undefined;
            };
            willOpen: {
                type: FunctionConstructor;
                default: null;
            };
            willClose: {
                type: FunctionConstructor;
                default: null;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            shift: boolean;
            disabled: boolean;
            placement: BasePlacement | "auto" | "auto-start" | "auto-end";
            strategy: Strategy;
            overflowPadding: number;
            arrowPadding: number;
            offset: number;
            inline: boolean;
            disableAnimation: boolean;
            popperClass: string;
            hideArrow: boolean;
            arrowClass: string;
            placementTopArrowClass: string;
            placementRightArrowClass: string;
            placementBottomArrowClass: string;
            placementLeftArrowClass: string;
            willOpen: Function;
            willClose: Function;
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
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        placement: {
            type: PropType<BasePlacement | "auto" | "auto-start" | "auto-end">;
            default: string;
        };
        strategy: {
            type: PropType<Strategy>;
            default: string;
        };
        overflowPadding: {
            type: NumberConstructor;
            default: number;
        };
        arrowPadding: {
            type: NumberConstructor;
            default: number;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
        inline: {
            type: BooleanConstructor;
            default: boolean;
        };
        shift: {
            type: BooleanConstructor;
            default: boolean;
        };
        disableAnimation: {
            type: BooleanConstructor;
            default: boolean;
        };
        popperClass: {
            type: StringConstructor;
            default: undefined;
        };
        hideArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        arrowClass: {
            type: StringConstructor;
            default: undefined;
        };
        placementTopArrowClass: {
            type: StringConstructor;
            default: undefined;
        };
        placementRightArrowClass: {
            type: StringConstructor;
            default: undefined;
        };
        placementBottomArrowClass: {
            type: StringConstructor;
            default: undefined;
        };
        placementLeftArrowClass: {
            type: StringConstructor;
            default: undefined;
        };
        willOpen: {
            type: FunctionConstructor;
            default: null;
        };
        willClose: {
            type: FunctionConstructor;
            default: null;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: PropType<BasePlacement | "auto" | "auto-start" | "auto-end">;
        default: string;
    };
    strategy: {
        type: PropType<Strategy>;
        default: string;
    };
    overflowPadding: {
        type: NumberConstructor;
        default: number;
    };
    arrowPadding: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    shift: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperClass: {
        type: StringConstructor;
        default: undefined;
    };
    hideArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowClass: {
        type: StringConstructor;
        default: undefined;
    };
    placementTopArrowClass: {
        type: StringConstructor;
        default: undefined;
    };
    placementRightArrowClass: {
        type: StringConstructor;
        default: undefined;
    };
    placementBottomArrowClass: {
        type: StringConstructor;
        default: undefined;
    };
    placementLeftArrowClass: {
        type: StringConstructor;
        default: undefined;
    };
    willOpen: {
        type: FunctionConstructor;
        default: null;
    };
    willClose: {
        type: FunctionConstructor;
        default: null;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    shift: boolean;
    disabled: boolean;
    placement: BasePlacement | "auto" | "auto-start" | "auto-end";
    strategy: Strategy;
    overflowPadding: number;
    arrowPadding: number;
    offset: number;
    inline: boolean;
    disableAnimation: boolean;
    popperClass: string;
    hideArrow: boolean;
    arrowClass: string;
    placementTopArrowClass: string;
    placementRightArrowClass: string;
    placementBottomArrowClass: string;
    placementLeftArrowClass: string;
    willOpen: Function;
    willClose: Function;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        trigger: (_: {
            isOpen: boolean;
            open: (ms?: number) => Promise<void>;
            close: (ms?: number) => Promise<void>;
            toggle: (openMs?: number, closeMs?: number) => Promise<void>;
        }) => any;
        default: (_: {
            isOpen: true;
            open: (ms?: number) => Promise<void>;
            close: (ms?: number) => Promise<void>;
            toggle: (openMs?: number, closeMs?: number) => Promise<void>;
        }) => any;
    };
});
export default _default;
