import { PropType } from "vue";
interface TopFiveChartResult {
    id: string | number;
    count: number;
    title: string;
    url?: string;
}
declare const _default: import("vue").DefineComponent<{
    /**
     * The title of the chart.
     */
    title: {
        type: StringConstructor;
        default: null;
    };
    /**
     * An array of objects. Each object must contain a unique "id" param and a "title" and "count" param. The "url" param is optional.
     *
     * If the "url" param is present, the entries display a regular clickable link. If the "url" param is not present,
     * and doNotLinkEntries is false, then the resultClick event is fired when an entry's clickable link is triggered.
     *
     * Example object: { id: 1, title: "Entry title", url: "https://seinet.sei.cmu.edu", count: 20 }
     */
    entries: {
        type: PropType<TopFiveChartResult[]>;
        default: () => never[];
    };
    /**
     * This prevents all entries from having a clickable link if set to true.
     */
    doNotLinkEntries: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The url for the "View All" link. Hides the link if null or omitted.
     */
    viewAllUrl: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Options include:
     * red, green, orange, blue, teal, purple, indigo, pink, and gray.
     */
    progressColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Displays a "%" character if true.
     */
    showPercent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Decreases the size of the chart title and makes it bold if true.
     */
    smallHeading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The message displayed when no entries data is available.
     */
    noDataMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The message displayed when the entries data is missing the required "id", "title", or "count" params.
     */
    missingPropsMsg: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    results(): TopFiveChartResult[];
    entriesHaveAllRequiredProps(): boolean;
    maxResultValue(): number;
}, {
    resultValue(value: number): number;
    resultCountDisplay(count: number): string | number;
    resultHasUrl(result: TopFiveChartResult): boolean;
    resultClick(result: TopFiveChartResult): void;
    getProgressColor(index: number): "bg-blue-100" | "bg-blue-500" | "bg-blue-700" | "bg-green-100" | "bg-green-500" | "bg-green-700" | "bg-teal-100" | "bg-teal-500" | "bg-teal-700" | "bg-orange-100" | "bg-orange-500" | "bg-orange-700" | "bg-red-100" | "bg-red-500" | "bg-red-700" | "bg-pink-100" | "bg-pink-500" | "bg-pink-700" | "bg-purple-100" | "bg-indigo-100" | "bg-indigo-500" | "bg-indigo-700" | "bg-gray-100" | "bg-gray-500" | "bg-gray-700" | "bg-gray-900" | "bg-teal-900" | "bg-teal-300" | "bg-red-900" | "bg-red-300" | "bg-gray-300" | "bg-green-900" | "bg-green-300" | "bg-orange-900" | "bg-orange-300" | "bg-pink-900" | "bg-pink-300" | "bg-indigo-900" | "bg-indigo-300" | "bg-purple-900" | "bg-purple-700" | "bg-purple-500" | "bg-purple-300" | "bg-blue-900" | "bg-blue-300" | undefined;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "result-click"[], "result-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The title of the chart.
     */
    title: {
        type: StringConstructor;
        default: null;
    };
    /**
     * An array of objects. Each object must contain a unique "id" param and a "title" and "count" param. The "url" param is optional.
     *
     * If the "url" param is present, the entries display a regular clickable link. If the "url" param is not present,
     * and doNotLinkEntries is false, then the resultClick event is fired when an entry's clickable link is triggered.
     *
     * Example object: { id: 1, title: "Entry title", url: "https://seinet.sei.cmu.edu", count: 20 }
     */
    entries: {
        type: PropType<TopFiveChartResult[]>;
        default: () => never[];
    };
    /**
     * This prevents all entries from having a clickable link if set to true.
     */
    doNotLinkEntries: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The url for the "View All" link. Hides the link if null or omitted.
     */
    viewAllUrl: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Options include:
     * red, green, orange, blue, teal, purple, indigo, pink, and gray.
     */
    progressColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Displays a "%" character if true.
     */
    showPercent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Decreases the size of the chart title and makes it bold if true.
     */
    smallHeading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The message displayed when no entries data is available.
     */
    noDataMsg: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The message displayed when the entries data is missing the required "id", "title", or "count" params.
     */
    missingPropsMsg: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onResult-click"?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    entries: TopFiveChartResult[];
    doNotLinkEntries: boolean;
    viewAllUrl: string;
    progressColor: string;
    showPercent: boolean;
    smallHeading: boolean;
    noDataMsg: string;
    missingPropsMsg: string;
}>;
export default _default;
