import { PropType } from 'vue';
interface FilterByDropdownOption {
    id: string | number;
    selected: boolean;
    text: string;
}
declare type FilterByDropdownPlacement = 'auto' | 'top' | 'right';
declare const _default: import("vue").DefineComponent<{
    /**
     * The v-model for this component. Determines opened/closed state.
     */
    modelValue: {
        type: PropType<FilterByDropdownOption[]>;
        default: () => never[];
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"" | "primary" | "secondary">;
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
     * The title for the toggle button.
     */
    title: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determine whether to enable option filtering on the dropdown.
     */
    enableFilter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to alphabetically sort the options.
     */
    enableSortOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the placement of the dropdown on the screen.
     */
    placement: {
        type: PropType<FilterByDropdownPlacement>;
        default: string;
    };
}, {
    button: import("vue").Ref<null>;
}, {
    filterText: string;
    tmpOptions: never[];
    open: boolean;
}, {
    zIndexClass(): "" | "z-0" | "z-10" | "z-20" | "z-30" | "z-40" | "z-50" | "z-auto";
    options: {
        get(): FilterByDropdownOption[];
        set(value: FilterByDropdownOption[]): void;
    };
    allSelected(): boolean;
    someSelected(): boolean;
    indeterminate(): boolean;
    filteredTmpOptions(): FilterByDropdownOption[];
    variantClass(): "" | "link link-primary" | "link link-secondary";
}, {
    toggleSelect(): void;
    saveSelections(): void;
    cancelSelections(): void;
    resetTmpOptions(): void;
    deselectAllOptions(): void;
    selectAllOptions(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model for this component. Determines opened/closed state.
     */
    modelValue: {
        type: PropType<FilterByDropdownOption[]>;
        default: () => never[];
    };
    /**
     * Determines the theme color of the component.
     */
    variant: {
        type: PropType<"" | "primary" | "secondary">;
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
     * The title for the toggle button.
     */
    title: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determine whether to enable option filtering on the dropdown.
     */
    enableFilter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to alphabetically sort the options.
     */
    enableSortOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the placement of the dropdown on the screen.
     */
    placement: {
        type: PropType<FilterByDropdownPlacement>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    modelValue: FilterByDropdownOption[];
    variant: "" | "primary" | "secondary";
    placement: FilterByDropdownPlacement;
    zIndex: "" | "0" | "auto" | "10" | "20" | "30" | "40" | "50";
    enableFilter: boolean;
    enableSortOptions: boolean;
}>;
export default _default;
