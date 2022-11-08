declare const _default: import("vue").DefineComponent<{}, {}, {
    datapointModel: number;
    fileUploaderModel: never[];
    uploadedImages: any;
    tabs: ({
        key: string;
        title: string;
        disabled: boolean;
        active?: undefined;
        tag?: undefined;
        href?: undefined;
        external?: undefined;
        align?: undefined;
    } | {
        key: string;
        title: string;
        active: boolean;
        disabled?: undefined;
        tag?: undefined;
        href?: undefined;
        external?: undefined;
        align?: undefined;
    } | {
        key: string;
        title: string;
        disabled?: undefined;
        active?: undefined;
        tag?: undefined;
        href?: undefined;
        external?: undefined;
        align?: undefined;
    } | {
        key: string;
        title: string;
        tag: string;
        href: string;
        external: boolean;
        disabled: boolean;
        active?: undefined;
        align?: undefined;
    } | {
        key: string;
        title: string;
        href: string;
        disabled?: undefined;
        active?: undefined;
        tag?: undefined;
        external?: undefined;
        align?: undefined;
    } | {
        key: string;
        align: string;
        title?: undefined;
        disabled?: undefined;
        active?: undefined;
        tag?: undefined;
        href?: undefined;
        external?: undefined;
    })[];
    selectModel: number;
    selectOptions: {
        id: number;
        value: number;
        text: string;
    }[];
    disablePopover: boolean;
    fields: ({
        key: string;
        label: string;
        sortable?: undefined;
        format?: undefined;
    } | {
        key: string;
        label: string;
        sortable: boolean;
        format?: undefined;
    } | {
        key: string;
        label: string;
        sortable: boolean;
        format: (date: Date) => string;
    })[];
    tableItems: {
        id: number;
        title: string;
        author: string;
        lastModified: Date;
    }[];
    countText: string;
    toasts: any;
    showDropdown: boolean;
    showModal: boolean;
    showModalSizeDropdown: boolean;
    modalSize: string;
    maxTextarea: {
        input: string;
    };
    calendar: {
        date: {
            start: null;
            end: null;
        };
        max: null;
        min: null;
        mode: string;
        size: string;
    };
    calendarSingle: {
        date: null;
        max: null;
        min: null;
        mode: string;
        size: string;
    };
    calendar2: {
        date: {
            start: null;
            end: null;
        };
        max: null;
        min: null;
        mode: string;
        size: string;
    };
    paginator: {
        currentPage: number;
        totalPages: number;
    };
    multiselect: {
        input: string;
        options: {
            key: number;
            value: string;
        }[];
        selected: never[];
    };
    filterby: {
        options: {
            id: number;
            text: string;
            selected: boolean;
        }[];
        idsText: null;
    };
    text: string;
    items: any;
    fakeAjaxItems: {
        term: string;
        payload: string;
    }[];
    searchText: string;
    radioModel: boolean;
    topFiveEntries: {
        id: number;
        title: string;
        url: string;
        count: number;
    }[];
}, {
    filteredMultiselectOptions(): {
        key: number;
        value: string;
    }[];
    filterByBtnText(): "One or more options selected" | "No options are selected";
    filterBySelectedOptions(): {
        id: number;
        text: string;
        selected: boolean;
    }[];
}, {
    generateToast(): void;
    changeModalSize(size: string): void;
    updateSelected(selections: any): void;
    filtered(options: any): void;
    result(result: any): void;
    search(q: any): void;
    autosuggest(): void;
    addField(): void;
    willOpen(res: Function, rej: Function): Promise<void>;
    willClose(res: Function, rej: Function): Promise<void>;
    willChangeTab(tab: any, res: Function, rej: Function): Promise<void>;
    changeTab(tab: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("radioGroupChange" | "hello")[], "radioGroupChange" | "hello", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onRadioGroupChange?: ((...args: any[]) => any) | undefined;
    onHello?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
