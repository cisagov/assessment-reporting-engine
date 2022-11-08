import { PropType } from "vue";
interface ToasterToast {
    id: number;
    variant: 'success' | 'info' | 'warning' | 'danger';
    title: string;
    text: string;
    autoHideDelay: number;
    noAutoHide: boolean;
}
declare const _default: import("vue").DefineComponent<{
    /**
     * The v-model for this component. It accepts an array of toasts. See the Toast component for guidance.
     */
    modelValue: {
        type: PropType<ToasterToast[]>;
        default: () => never[];
    };
}, unknown, unknown, {
    toasts: {
        get(): ToasterToast[];
        set(value: ToasterToast[]): void;
    };
}, {
    removeToast(id: number | string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The v-model for this component. It accepts an array of toasts. See the Toast component for guidance.
     */
    modelValue: {
        type: PropType<ToasterToast[]>;
        default: () => never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: ToasterToast[];
}>;
export default _default;
