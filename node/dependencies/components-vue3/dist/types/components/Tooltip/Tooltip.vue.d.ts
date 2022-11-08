import { PropType } from "vue";
import type { Placement as BasePlacement, Strategy } from '@floating-ui/dom';
declare type Placement = BasePlacement | 'auto' | 'auto-start' | 'auto-end';
declare const _default: import("vue").DefineComponent<{
    /**
     * The z-index for the popover.
     */
    zIndex: {
        type: PropType<"" | "0" | "auto" | "10" | "20" | "30" | "40" | "50">;
        required: false;
        default: string;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"light" | "dark">;
        default: string;
    };
    /**
     * Delays opening the toggle in ms.
     */
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Delays closing the toggle in ms.
     */
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The width of the popover.
     */
    size: {
        type: PropType<"" | "md" | "sm" | "lg" | "auto" | "xl">;
        default: string;
    };
    /**
     * The strategy of the popover on the screen.
     */
    strategy: {
        type: PropType<Strategy>;
        default: string;
    };
    /**
     * The placement of the popover on the screen.
     */
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    /**
     * Determines if the popover should display or not.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Allows for code execution prior to opening the tooltip.
     *
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     *
     * For example, this can prevent the tooltip from opening
     * until a call to a backend API completes.
     *
     * Example definition in parent component:
     *
     * ```
     * async willOpen(open, cancel) {
     *  try {
     *    await SOME_API_CALL_RESPONSE()
     *    // let the open process continue
     *    open()
     *  } catch (e) {
     *    // cancel the open process
     *    cancel()
     *  }
     * }
     * ```
     */
    willOpen: {
        type: FunctionConstructor;
        default: null;
    };
    /**
     * Allows for code execution prior to closing the tooltip.
     *
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     *
     * For example, this can prevent the tooltip from closing
     * until a call to a backend API completes.
     *
     * Example definition in parent component:
     *
     * ```
     * async willClose(close, cancel) {
     *  try {
     *    await SOME_API_CALL_RESPONSE()
     *    // let the close process continue
     *    close()
     *  } catch (e) {
     *    // cancel the close process
     *    cancel()
     *  }
     * }
     * ```
     */
    willClose: {
        type: FunctionConstructor;
        default: null;
    };
}, unknown, unknown, {
    zIndexClass(): "" | "z-0" | "z-10" | "z-20" | "z-30" | "z-40" | "z-50" | "z-auto";
    variantClass(): "bg-dark text-light" | "bg-light text-dark";
    variantArrowClass(): "bg-dark" | "bg-light";
    sizeClass(): "w-56" | "w-auto" | "w-32" | "w-48" | "w-72";
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The z-index for the popover.
     */
    zIndex: {
        type: PropType<"" | "0" | "auto" | "10" | "20" | "30" | "40" | "50">;
        required: false;
        default: string;
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"light" | "dark">;
        default: string;
    };
    /**
     * Delays opening the toggle in ms.
     */
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Delays closing the toggle in ms.
     */
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The width of the popover.
     */
    size: {
        type: PropType<"" | "md" | "sm" | "lg" | "auto" | "xl">;
        default: string;
    };
    /**
     * The strategy of the popover on the screen.
     */
    strategy: {
        type: PropType<Strategy>;
        default: string;
    };
    /**
     * The placement of the popover on the screen.
     */
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    /**
     * Determines if the popover should display or not.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Allows for code execution prior to opening the tooltip.
     *
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     *
     * For example, this can prevent the tooltip from opening
     * until a call to a backend API completes.
     *
     * Example definition in parent component:
     *
     * ```
     * async willOpen(open, cancel) {
     *  try {
     *    await SOME_API_CALL_RESPONSE()
     *    // let the open process continue
     *    open()
     *  } catch (e) {
     *    // cancel the open process
     *    cancel()
     *  }
     * }
     * ```
     */
    willOpen: {
        type: FunctionConstructor;
        default: null;
    };
    /**
     * Allows for code execution prior to closing the tooltip.
     *
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     *
     * For example, this can prevent the tooltip from closing
     * until a call to a backend API completes.
     *
     * Example definition in parent component:
     *
     * ```
     * async willClose(close, cancel) {
     *  try {
     *    await SOME_API_CALL_RESPONSE()
     *    // let the close process continue
     *    close()
     *  } catch (e) {
     *    // cancel the close process
     *    cancel()
     *  }
     * }
     * ```
     */
    willClose: {
        type: FunctionConstructor;
        default: null;
    };
}>>, {
    disabled: boolean;
    variant: "light" | "dark";
    size: "" | "md" | "sm" | "lg" | "auto" | "xl";
    placement: Placement;
    strategy: Strategy;
    willOpen: Function;
    willClose: Function;
    zIndex: "" | "0" | "auto" | "10" | "20" | "30" | "40" | "50";
    openDelay: number;
    closeDelay: number;
}>;
export default _default;
