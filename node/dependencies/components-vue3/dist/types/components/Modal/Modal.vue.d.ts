import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    /**
     * The v-model that determines the show/hide state of the modal.
     */
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the size of the modal.
     */
    size: {
        type: PropType<"" | "md" | "sm" | "lg" | "xl">;
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
}, {
    titleWrapper: import("vue").Ref<null>;
    modalContainer: import("vue").Ref<null>;
    showContent: import("vue").Ref<boolean>;
    hasTitleSlot: import("vue").ComputedRef<boolean>;
    hasFooterSlot: import("vue").ComputedRef<boolean>;
    showModal: import("vue").WritableComputedRef<boolean>;
    zIndexClass: import("vue").ComputedRef<"" | "z-0" | "z-10" | "z-20" | "z-30" | "z-40" | "z-50" | "z-auto">;
    makeDomChanges: () => void;
    removeDomChanges: () => void;
    close: () => void;
    handleEscKey: (e: KeyboardEvent) => void;
    checkKeyEvent: (event: KeyboardEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model that determines the show/hide state of the modal.
     */
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the size of the modal.
     */
    size: {
        type: PropType<"" | "md" | "sm" | "lg" | "xl">;
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
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    size: "" | "md" | "sm" | "lg" | "xl";
    zIndex: "" | "0" | "auto" | "10" | "20" | "30" | "40" | "50";
}>;
export default _default;
