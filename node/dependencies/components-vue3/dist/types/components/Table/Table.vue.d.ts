import { PropType } from 'vue';
interface TableField {
    key: string;
    label: string;
    format?: Function | undefined;
    sortable?: boolean | undefined;
    hidden?: boolean | undefined;
    header?: boolean | undefined;
}
interface TableItem {
    id: number;
    [key: string]: unknown;
}
declare const _default: import("vue").DefineComponent<{
    /**
     * An array of objects. Each object must have a unique "id" but everything else is optional.
     *
     * Please note that the **items** keys map 1:1 to the **fields** keys, meaning that, any key found in the items
     * array that is not in the fields array will be ignored and not displayed.
     *
     * Example object:
     *
     * **{ id: 1, title: "Title", lastModified: "01/01/2019" }**
     */
    items: {
        type: PropType<TableItem[]>;
        default: () => never[];
    };
    /**
     * An array of objects. These objects determine the column headers.
     *
     * Each object must contain a unique "key" and a "label" for use in the table column header.
     *
     * Optional object properties include a "sortable" boolean and a "format" function. The "sortable"
     * key indicates whether a table column is sortable. The "format" key allows you to customize
     * the way the item's data appears in the table.
     *
     * Basic example object (not sortable):
     *
     * **{ key: "id", label: "ID" }**
     *
     * Advanced example object (sortable with custom formatter):
     *
     * **{ key: "lastModifiedDate", label: 'Last Modified', sortable: true, format: (date) => date.toLocaleDateString() }**
     */
    fields: {
        type: PropType<TableField[]>;
        default: () => never[];
    };
    /**
     * Determines the field key to sort by.
     */
    sortBy: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines if sorting should be descending by default.
     */
    sortDesc: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the caption for the table if desired.
     */
    caption: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Determines the CSS classes used on the sorted column.
     */
    sortedColumnClass: {
        type: StringConstructor;
        default: null;
    };
}, unknown, {
    sortField: string;
    sortOrder: number;
}, {
    sortedItems(): TableItem[];
    displayedFields(): TableField[];
    displayedFieldKeys(): string[];
}, {
    cellElement(key: string): "td" | "th";
    format(item: TableItem, key: string): any;
    handleSortBy(field: TableField): void;
    sortCompare(aRow: TableItem, bRow: TableItem, key: string): number;
    toString(value: TableItem): string;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * An array of objects. Each object must have a unique "id" but everything else is optional.
     *
     * Please note that the **items** keys map 1:1 to the **fields** keys, meaning that, any key found in the items
     * array that is not in the fields array will be ignored and not displayed.
     *
     * Example object:
     *
     * **{ id: 1, title: "Title", lastModified: "01/01/2019" }**
     */
    items: {
        type: PropType<TableItem[]>;
        default: () => never[];
    };
    /**
     * An array of objects. These objects determine the column headers.
     *
     * Each object must contain a unique "key" and a "label" for use in the table column header.
     *
     * Optional object properties include a "sortable" boolean and a "format" function. The "sortable"
     * key indicates whether a table column is sortable. The "format" key allows you to customize
     * the way the item's data appears in the table.
     *
     * Basic example object (not sortable):
     *
     * **{ key: "id", label: "ID" }**
     *
     * Advanced example object (sortable with custom formatter):
     *
     * **{ key: "lastModifiedDate", label: 'Last Modified', sortable: true, format: (date) => date.toLocaleDateString() }**
     */
    fields: {
        type: PropType<TableField[]>;
        default: () => never[];
    };
    /**
     * Determines the field key to sort by.
     */
    sortBy: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines if sorting should be descending by default.
     */
    sortDesc: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the caption for the table if desired.
     */
    caption: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Determines the CSS classes used on the sorted column.
     */
    sortedColumnClass: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    caption: string;
    items: TableItem[];
    fields: TableField[];
    sortBy: string;
    sortDesc: boolean;
    sortedColumnClass: string;
}>;
export default _default;
