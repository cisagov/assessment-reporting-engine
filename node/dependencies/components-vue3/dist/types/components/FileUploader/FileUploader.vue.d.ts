import { PropType } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            name: string;
            modelValue: File[];
            required: boolean;
            multiple: boolean;
            accept: string;
            allowedFiletypes: unknown[];
            filesize: number;
            helperText: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             * An array of files. This prop is optional.
             *
             * This syncs with the internal fileList and invalidFileList
             * to give developers more control over files.
             *
             * Each file has `name`, `type`, `size`, `lastModified` properties.
             *
             * You can check a file's validity using its `invalidType`
             * and `invalidSize` boolean properties. They are only
             * present if the file is invalid
             */
            modelValue: {
                type: PropType<File[]>;
                default: () => never[];
            };
            /**
             * Determines the form name to use for the upload input field.
             */
            name: {
                type: StringConstructor;
                default: string;
            };
            /**
             * Determines whether the user can upload more than one file.
             */
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Determines if the file upload field is required.
             */
            required: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Determines the accepted file formats used on the upload input field.
             */
            accept: {
                type: StringConstructor;
                default: undefined;
            };
            /**
             * Determines the file types used for validation.
             */
            allowedFiletypes: {
                type: ArrayConstructor;
                default: () => never[];
            };
            /**
             * Determines the maximum allowed filesize in megabytes for each uploaded file.
             */
            filesize: {
                type: NumberConstructor;
                default: number;
            };
            /**
             * Determines the helper text used to describe the upload field.
             */
            helperText: {
                type: StringConstructor;
                default: undefined;
            };
        }>> & {
            "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
            onAdd?: ((...args: any[]) => any) | undefined;
            onRemove?: ((...args: any[]) => any) | undefined;
            "onRemove-invalid"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "name" | "modelValue" | "required" | "multiple" | "accept" | "allowedFiletypes" | "filesize" | "helperText">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:model-value" | "add" | "remove" | "remove-invalid", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            /**
             * An array of files. This prop is optional.
             *
             * This syncs with the internal fileList and invalidFileList
             * to give developers more control over files.
             *
             * Each file has `name`, `type`, `size`, `lastModified` properties.
             *
             * You can check a file's validity using its `invalidType`
             * and `invalidSize` boolean properties. They are only
             * present if the file is invalid
             */
            modelValue: {
                type: PropType<File[]>;
                default: () => never[];
            };
            /**
             * Determines the form name to use for the upload input field.
             */
            name: {
                type: StringConstructor;
                default: string;
            };
            /**
             * Determines whether the user can upload more than one file.
             */
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Determines if the file upload field is required.
             */
            required: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Determines the accepted file formats used on the upload input field.
             */
            accept: {
                type: StringConstructor;
                default: undefined;
            };
            /**
             * Determines the file types used for validation.
             */
            allowedFiletypes: {
                type: ArrayConstructor;
                default: () => never[];
            };
            /**
             * Determines the maximum allowed filesize in megabytes for each uploaded file.
             */
            filesize: {
                type: NumberConstructor;
                default: number;
            };
            /**
             * Determines the helper text used to describe the upload field.
             */
            helperText: {
                type: StringConstructor;
                default: undefined;
            };
        }>> & {
            "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
            onAdd?: ((...args: any[]) => any) | undefined;
            onRemove?: ((...args: any[]) => any) | undefined;
            "onRemove-invalid"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "add" | "remove" | "remove-invalid")[], string, {
            name: string;
            modelValue: File[];
            required: boolean;
            multiple: boolean;
            accept: string;
            allowedFiletypes: unknown[];
            filesize: number;
            helperText: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        /**
         * An array of files. This prop is optional.
         *
         * This syncs with the internal fileList and invalidFileList
         * to give developers more control over files.
         *
         * Each file has `name`, `type`, `size`, `lastModified` properties.
         *
         * You can check a file's validity using its `invalidType`
         * and `invalidSize` boolean properties. They are only
         * present if the file is invalid
         */
        modelValue: {
            type: PropType<File[]>;
            default: () => never[];
        };
        /**
         * Determines the form name to use for the upload input field.
         */
        name: {
            type: StringConstructor;
            default: string;
        };
        /**
         * Determines whether the user can upload more than one file.
         */
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Determines if the file upload field is required.
         */
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Determines the accepted file formats used on the upload input field.
         */
        accept: {
            type: StringConstructor;
            default: undefined;
        };
        /**
         * Determines the file types used for validation.
         */
        allowedFiletypes: {
            type: ArrayConstructor;
            default: () => never[];
        };
        /**
         * Determines the maximum allowed filesize in megabytes for each uploaded file.
         */
        filesize: {
            type: NumberConstructor;
            default: number;
        };
        /**
         * Determines the helper text used to describe the upload field.
         */
        helperText: {
            type: StringConstructor;
            default: undefined;
        };
    }>> & {
        "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
        onAdd?: ((...args: any[]) => any) | undefined;
        onRemove?: ((...args: any[]) => any) | undefined;
        "onRemove-invalid"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * An array of files. This prop is optional.
     *
     * This syncs with the internal fileList and invalidFileList
     * to give developers more control over files.
     *
     * Each file has `name`, `type`, `size`, `lastModified` properties.
     *
     * You can check a file's validity using its `invalidType`
     * and `invalidSize` boolean properties. They are only
     * present if the file is invalid
     */
    modelValue: {
        type: PropType<File[]>;
        default: () => never[];
    };
    /**
     * Determines the form name to use for the upload input field.
     */
    name: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether the user can upload more than one file.
     */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines if the file upload field is required.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines the accepted file formats used on the upload input field.
     */
    accept: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * Determines the file types used for validation.
     */
    allowedFiletypes: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * Determines the maximum allowed filesize in megabytes for each uploaded file.
     */
    filesize: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines the helper text used to describe the upload field.
     */
    helperText: {
        type: StringConstructor;
        default: undefined;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
    "onRemove-invalid"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "add" | "remove" | "remove-invalid")[], "update:model-value" | "add" | "remove" | "remove-invalid", {
    name: string;
    modelValue: File[];
    required: boolean;
    multiple: boolean;
    accept: string;
    allowedFiletypes: unknown[];
    filesize: number;
    helperText: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {
            files: {
                readonly lastModified: number;
                readonly name: string;
                readonly webkitRelativePath: string;
                readonly size: number;
                readonly type: string;
                arrayBuffer: () => Promise<ArrayBuffer>;
                slice: (start?: number | undefined, end?: number | undefined, contentType?: string | undefined) => Blob;
                stream: () => ReadableStream<Uint8Array>;
                text: () => Promise<string>;
            }[];
            invalidFiles: {
                readonly lastModified: number;
                readonly name: string;
                readonly webkitRelativePath: string;
                readonly size: number;
                readonly type: string;
                arrayBuffer: () => Promise<ArrayBuffer>;
                slice: (start?: number | undefined, end?: number | undefined, contentType?: string | undefined) => Blob;
                stream: () => ReadableStream<Uint8Array>;
                text: () => Promise<string>;
                invalidType?: boolean | undefined;
                invalidSize?: boolean | undefined;
            }[];
        }) => any;
    };
});
export default _default;
