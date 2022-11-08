declare const _default: import("vue").DefineComponent<{}, {}, {
    Datepicker: import("vue").DefineComponent<{
        zIndex: {
            type: import("vue").PropType<"" | "0" | "auto" | "10" | "20" | "30" | "40" | "50">;
            required: false;
            default: string;
        };
        hideArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"" | "md" | "sm">;
            default: string;
        };
        mode: {
            type: import("vue").PropType<import("../components/Datepicker/Datepicker.vue").CalendarMode>;
            default: string;
        };
        modelValue: {
            type: import("vue").PropType<import("../components/Datepicker/Datepicker.vue").CalendarDate | import("../components/Datepicker/Datepicker.vue").CalendarRange>;
            default: null;
        };
        max: {
            type: DateConstructor;
            default: null;
        };
        min: {
            type: DateConstructor;
            default: null;
        };
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
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
        focusCorrectInput(value: import("../components/Datepicker/Datepicker.vue").CalendarDate | import("../components/Datepicker/Datepicker.vue").CalendarRange, close: Function): void;
        updateDatesFromInput(): void;
        formatDate(dateString: string): {
            date: Date;
            text: string;
        } | {
            date: null;
            text: string;
        };
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        zIndex: {
            type: import("vue").PropType<"" | "0" | "auto" | "10" | "20" | "30" | "40" | "50">;
            required: false;
            default: string;
        };
        hideArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"" | "md" | "sm">;
            default: string;
        };
        mode: {
            type: import("vue").PropType<import("../components/Datepicker/Datepicker.vue").CalendarMode>;
            default: string;
        };
        modelValue: {
            type: import("vue").PropType<import("../components/Datepicker/Datepicker.vue").CalendarDate | import("../components/Datepicker/Datepicker.vue").CalendarRange>;
            default: null;
        };
        max: {
            type: DateConstructor;
            default: null;
        };
        min: {
            type: DateConstructor;
            default: null;
        };
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        readonly: boolean;
        modelValue: import("../components/Datepicker/Datepicker.vue").CalendarDate | import("../components/Datepicker/Datepicker.vue").CalendarRange;
        disabled: boolean;
        required: boolean;
        size: "" | "md" | "sm";
        mode: import("../components/Datepicker/Datepicker.vue").CalendarMode;
        min: Date;
        max: Date;
        hideArrow: boolean;
        zIndex: "" | "0" | "auto" | "10" | "20" | "30" | "40" | "50";
    }>;
    collapsed: boolean;
    appSuite: string;
    appName: string;
    pageTitle: string;
    appIconUrl: null;
    appUrl: string;
    enableCollapsibleSidebar: boolean;
    sidebarNavigationItems: ({
        id: number;
        title: string;
        active: boolean;
        href: string;
        iconUrl?: undefined;
        items?: undefined;
        badgeCount?: undefined;
    } | {
        id: number;
        title: string;
        iconUrl: string;
        items: ({
            id: number;
            title: string;
            active: boolean;
            href: string;
            badgeCount?: undefined;
        } | {
            id: number;
            title: string;
            active: boolean;
            href: string;
            badgeCount: number;
        })[];
        active?: undefined;
        href?: undefined;
        badgeCount?: undefined;
    } | {
        id: number;
        title: string;
        items: ({
            id: number;
            title: string;
            active: boolean;
            href: string;
            badgeCount?: undefined;
        } | {
            id: number;
            title: string;
            active: boolean;
            href: string;
            badgeCount: number;
        })[];
        active?: undefined;
        href?: undefined;
        iconUrl?: undefined;
        badgeCount?: undefined;
    } | {
        id: number;
        title: string;
        active: boolean;
        href: string;
        badgeCount: number;
        iconUrl?: undefined;
        items?: undefined;
    })[];
}, {}, {
    navigate({ group, item, event }: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
