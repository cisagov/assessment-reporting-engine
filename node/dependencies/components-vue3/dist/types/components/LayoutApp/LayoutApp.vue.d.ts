import { PropType } from 'vue';
interface LayoutAppSidebarNavItem {
    id: number | string;
    href: string;
    active: boolean;
    title: string;
    badgeCount?: number;
    iconUrl?: string;
    items?: LayoutAppSidebarNavItem[];
}
declare const _default: import("vue").DefineComponent<{
    /**
     * The v-model that determines collapsed state.
     */
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The width class of the non-collapsed sidebar when not in a mobile responsive view.
     */
    sidebarWidth: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to enable collapsing functionality.
     *
     * Ensure to have an icon for every item in the **sidebarNavigationItems** array for this to look nice.
     *
     * Including an **appIconUrl** will also improve the user experience.
     */
    enableCollapsibleSidebar: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The app suite name's prefix (styled in red) for the layout.
     */
    appSuitePrefix: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The app suite name for the layout.
     */
    appSuite: {
        type: StringConstructor;
        default: null;
    };
    /**
     * The app suite url for the layout.
     */
    appSuiteUrl: {
        type: StringConstructor;
        default: null;
    };
    /**
     * The app name for the layout.
     */
    appName: {
        type: StringConstructor;
        default: null;
    };
    /**
     * The app url for the layout.
     */
    appUrl: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Determines whether to hide the **appName** in the mobile header.
     *
     * This is useful when an application's name is very long.
     */
    hideAppNameInMobileHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The app icon url for the layout.
     */
    appIconUrl: {
        type: StringConstructor;
        default: null;
    };
    /**
     * The page title for the layout.
     */
    pageTitle: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Determines whether to hide the page header.
     */
    hidePageHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The sidebar navigation array for the layout.
     *
     * Each item should have a unique **id**, **title**, **active**, and **href** key value pair. **badgeCount** and **iconUrl** are optional.
     *
     * Item object:
     *
     * { id: Number, title: String, active: Boolean, href: String, badgeCount: Number, iconUrl: String }
     */
    sidebarNavigationItems: {
        type: PropType<LayoutAppSidebarNavItem[]>;
        default: () => never[];
    };
    /**
     * Determines whether to hide the app icon.
     */
    hideAppIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to hide the icons in the sidebar.
     */
    hideSidebarIcons: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    showMobileMenu: boolean;
    openItemsGroups: LayoutAppSidebarNavItem[];
}, {
    wordmark(): string;
    year(): number;
    computedSidebarWidth(): string;
    collapsed: {
        get(): boolean;
        set(val: boolean): void;
    };
}, {
    itemsGroupBadgeCount(item: LayoutAppSidebarNavItem): number | null;
    itemsGroupIsActive(item: LayoutAppSidebarNavItem): number | undefined;
    showItemsGroup(item: LayoutAppSidebarNavItem): number;
    toggleItemsGroup(item: LayoutAppSidebarNavItem): void;
    hasSlot(title: string): boolean;
    navigate(group: LayoutAppSidebarNavItem | null, item: Pick<LayoutAppSidebarNavItem, 'title' | 'href'>, event: Event): void;
    toggleCollapse(): void;
    handleDocumentKeyUp($event: KeyboardEvent): void;
    checkKeyEvent(event: KeyboardEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "navigate")[], "update:modelValue" | "navigate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model that determines collapsed state.
     */
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The width class of the non-collapsed sidebar when not in a mobile responsive view.
     */
    sidebarWidth: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether to enable collapsing functionality.
     *
     * Ensure to have an icon for every item in the **sidebarNavigationItems** array for this to look nice.
     *
     * Including an **appIconUrl** will also improve the user experience.
     */
    enableCollapsibleSidebar: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The app suite name's prefix (styled in red) for the layout.
     */
    appSuitePrefix: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The app suite name for the layout.
     */
    appSuite: {
        type: StringConstructor;
        default: null;
    };
    /**
     * The app suite url for the layout.
     */
    appSuiteUrl: {
        type: StringConstructor;
        default: null;
    };
    /**
     * The app name for the layout.
     */
    appName: {
        type: StringConstructor;
        default: null;
    };
    /**
     * The app url for the layout.
     */
    appUrl: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Determines whether to hide the **appName** in the mobile header.
     *
     * This is useful when an application's name is very long.
     */
    hideAppNameInMobileHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The app icon url for the layout.
     */
    appIconUrl: {
        type: StringConstructor;
        default: null;
    };
    /**
     * The page title for the layout.
     */
    pageTitle: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Determines whether to hide the page header.
     */
    hidePageHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The sidebar navigation array for the layout.
     *
     * Each item should have a unique **id**, **title**, **active**, and **href** key value pair. **badgeCount** and **iconUrl** are optional.
     *
     * Item object:
     *
     * { id: Number, title: String, active: Boolean, href: String, badgeCount: Number, iconUrl: String }
     */
    sidebarNavigationItems: {
        type: PropType<LayoutAppSidebarNavItem[]>;
        default: () => never[];
    };
    /**
     * Determines whether to hide the app icon.
     */
    hideAppIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to hide the icons in the sidebar.
     */
    hideSidebarIcons: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onNavigate?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    sidebarWidth: string;
    enableCollapsibleSidebar: boolean;
    appSuitePrefix: string;
    appSuite: string;
    appSuiteUrl: string;
    appName: string;
    appUrl: string;
    hideAppNameInMobileHeader: boolean;
    appIconUrl: string;
    pageTitle: string;
    hidePageHeader: boolean;
    sidebarNavigationItems: LayoutAppSidebarNavItem[];
    hideAppIcon: boolean;
    hideSidebarIcons: boolean;
}>;
export default _default;
