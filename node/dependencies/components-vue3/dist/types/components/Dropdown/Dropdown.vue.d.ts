import { PropType } from 'vue';
import type { Placement as BasePlacement, Strategy } from '@floating-ui/dom';
declare type Placement = BasePlacement | 'auto' | 'auto-start' | 'auto-end';
declare const _default: import("vue").DefineComponent<{
    /**
     * The content of the dropdown trigger.
     */
    title: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Styling for the button trigger.
     */
    variant: {
        type: PropType<"" | "default" | "primary" | "danger" | "light" | "success">;
        default: string;
    };
    /**
     * The z-index for the popover.
     */
    zIndex: {
        type: PropType<"" | "0" | "auto" | "10" | "20" | "30" | "40" | "50">;
        required: false;
        default: string;
    };
    /**
     * The distance between the popper and the trigger.
     */
    offset: {
        type: NumberConstructor;
        default: number;
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
     * Determines the size of the trigger button.
     */
    size: {
        type: PropType<"" | "md" | "sm">;
        default: string;
    };
    /**
     * Determines whether the content of the popper will set the width of the popper.
     */
    auto: {
        type: BooleanConstructor;
        default: boolean;
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
     * Determines whether to use the outline styling on the trigger button or not.
     */
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to use the block styling on the trigger button or not.
     */
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the popover should display or not.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Allows for code execution prior to opening the popover.
     *
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     *
     * For example, this can prevent the popover from opening
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
     * Allows for code execution prior to closing the popover.
     *
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     *
     * For example, this can prevent the popover from closing
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
}, {
    button: import("vue").Ref<null>;
    handleClick: (isOpen: boolean, open: Function, close: Function) => void;
}, unknown, {
    zIndexClass(): "" | "z-0" | "z-10" | "z-20" | "z-30" | "z-40" | "z-50" | "z-auto";
    sizeClass(): "" | "btn-sm";
    variantClass(): "" | "btn-default" | "btn-primary" | "btn-success" | "btn-danger" | "btn-light";
    outlineClass(): "" | "btn-outline";
    disabledClass(): "" | "disabled";
    blockClass(): "" | "btn-block";
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The content of the dropdown trigger.
     */
    title: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Styling for the button trigger.
     */
    variant: {
        type: PropType<"" | "default" | "primary" | "danger" | "light" | "success">;
        default: string;
    };
    /**
     * The z-index for the popover.
     */
    zIndex: {
        type: PropType<"" | "0" | "auto" | "10" | "20" | "30" | "40" | "50">;
        required: false;
        default: string;
    };
    /**
     * The distance between the popper and the trigger.
     */
    offset: {
        type: NumberConstructor;
        default: number;
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
     * Determines the size of the trigger button.
     */
    size: {
        type: PropType<"" | "md" | "sm">;
        default: string;
    };
    /**
     * Determines whether the content of the popper will set the width of the popper.
     */
    auto: {
        type: BooleanConstructor;
        default: boolean;
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
     * Determines whether to use the outline styling on the trigger button or not.
     */
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to use the block styling on the trigger button or not.
     */
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the popover should display or not.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Allows for code execution prior to opening the popover.
     *
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     *
     * For example, this can prevent the popover from opening
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
     * Allows for code execution prior to closing the popover.
     *
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     *
     * For example, this can prevent the popover from closing
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
    title: string;
    disabled: boolean;
    variant: "" | "default" | "primary" | "danger" | "light" | "success";
    size: "" | "md" | "sm";
    outline: boolean;
    block: boolean;
    auto: boolean;
    placement: Placement;
    strategy: Strategy;
    offset: number;
    willOpen: Function;
    willClose: Function;
    zIndex: "" | "0" | "auto" | "10" | "20" | "30" | "40" | "50";
    openDelay: number;
    closeDelay: number;
}>;
export default _default;
