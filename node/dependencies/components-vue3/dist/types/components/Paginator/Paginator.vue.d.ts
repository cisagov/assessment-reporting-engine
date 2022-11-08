declare const _default: import("vue").DefineComponent<{
    /**
     * The active page number.
     */
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The total number of pages.
     */
    totalPages: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to show the loading state or not.
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the page threshold before the ellipsis truncation begins.
     */
    threshold: {
        type: NumberConstructor;
        default: number;
    };
}, unknown, unknown, {
    prevDisabled(): boolean;
    nextDisabled(): boolean;
    pageList(): (string | number)[];
}, {
    goToPage(page: number | string, event: MouseEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "go-to-page"[], "go-to-page", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The active page number.
     */
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The total number of pages.
     */
    totalPages: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to show the loading state or not.
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the page threshold before the ellipsis truncation begins.
     */
    threshold: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onGo-to-page"?: ((...args: any[]) => any) | undefined;
}, {
    threshold: number;
    loading: boolean;
    currentPage: number;
    totalPages: number;
}>;
export default _default;
