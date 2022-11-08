import { PropType } from 'vue';
export declare type CalendarDate = Date | null;
export interface CalendarRange {
    start: CalendarDate;
    end: CalendarDate;
}
export declare type CalendarMode = 'date' | 'dateTime' | 'time';
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
     * Determines whether to display or hide the arrow for range selection.
     */
    hideArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the sizing of the component.
     */
    size: {
        type: PropType<"" | "md" | "sm">;
        default: string;
    };
    /**
     * Determines the mode of the component.
     */
    mode: {
        type: PropType<CalendarMode>;
        default: string;
    };
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
        default: null;
    };
    /**
     * The max date allowed for the datepicker.
     */
    max: {
        type: DateConstructor;
        default: null;
    };
    /**
     * The min date allowed for the datepicker.
     */
    min: {
        type: DateConstructor;
        default: null;
    };
    /**
     * Determines if the component is required.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the component is readonly.
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the component is disabled.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    inputDate: {
        start: string;
        end: string;
    };
}, {
    zIndexClass(): "" | "z-0" | "z-10" | "z-20" | "z-30" | "z-40" | "z-50" | "z-auto";
    isRange(): boolean | null;
    placeholder(): "mm/dd/yyyy" | "hh:mm a" | "mm/dd/yyyy hh:mm a";
    inputFormat(): "MM/dd/yyyy" | "hh:mm aaa" | "MM/dd/yyyy hh:mm aaa";
    inputPattern(): "[0-9]{2}/[0-9]{2}/[0-9]{4}" | "[0-9]{2}:[0-9]{2} [a|p]m" | "[0-9]{2}/[0-9]{2}/[0-9]{4} [0-9]{2}:[0-9]{2} [a|p]m";
    localDate: {
        get(): any;
        set(value: any): void;
    };
}, {
    focusCorrectInput(value: CalendarDate | CalendarRange, close: Function): void;
    updateDatesFromInput(): void;
    formatDate(dateString: string): {
        date: Date;
        text: string;
    } | {
        date: null;
        text: string;
    };
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The z-index for the popover.
     */
    zIndex: {
        type: PropType<"" | "0" | "auto" | "10" | "20" | "30" | "40" | "50">;
        required: false;
        default: string;
    };
    /**
     * Determines whether to display or hide the arrow for range selection.
     */
    hideArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the sizing of the component.
     */
    size: {
        type: PropType<"" | "md" | "sm">;
        default: string;
    };
    /**
     * Determines the mode of the component.
     */
    mode: {
        type: PropType<CalendarMode>;
        default: string;
    };
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
        default: null;
    };
    /**
     * The max date allowed for the datepicker.
     */
    max: {
        type: DateConstructor;
        default: null;
    };
    /**
     * The min date allowed for the datepicker.
     */
    min: {
        type: DateConstructor;
        default: null;
    };
    /**
     * Determines if the component is required.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the component is readonly.
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the component is disabled.
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    modelValue: CalendarDate | CalendarRange;
    disabled: boolean;
    required: boolean;
    size: "" | "md" | "sm";
    mode: CalendarMode;
    min: Date;
    max: Date;
    hideArrow: boolean;
    zIndex: "" | "0" | "auto" | "10" | "20" | "30" | "40" | "50";
}>;
export default _default;
