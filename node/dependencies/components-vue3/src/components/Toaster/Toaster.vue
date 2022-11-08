<template>
  <div
    v-if="toasts.length > 0"
    data-id="sds-toaster"
    class="fixed inset-0 z-50 p-4 pointer-events-none sm:p-6"
  >
    <transition-group
      tag="div"
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition duration-100 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      class="space-y-4"
    >
      <!-- @slot Toaster content. @binding toasts, removeToast -->
      <slot
        :toasts="toasts"
        :remove-toast="removeToast"
      >
        <sds-toast
          v-for="toast in toasts"
          :id="toast.id"
          :key="toast.id"
          :variant="toast.variant"
          :title="toast.title"
          :text="toast.text"
          :auto-hide-delay="toast.autoHideDelay || 5000"
          :no-auto-hide="toast.noAutoHide || false"
          class="ml-auto"
          @remove="removeToast"
        />
      </slot>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SdsToast from "../Toast/Toast.vue";

interface ToasterToast {
  id: number
  variant: 'success' | 'info' | 'warning' | 'danger'
  title: string
  text: string
  autoHideDelay: number
  noAutoHide: boolean
}

export default defineComponent({
  name: 'SdsToaster',
  components: {
    SdsToast,
  },
  props: {
    /**
     * The v-model for this component. It accepts an array of toasts. See the Toast component for guidance.
     */
    modelValue: {
      type: Array as PropType<ToasterToast[]>,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  computed: {
    toasts: {
      get() {
        return this.modelValue;
      },
      set(value: ToasterToast[]) {
        /**
         * Emitted when current array of toasts changes.
         */
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    removeToast(id: number | string) {
      this.toasts = this.toasts.filter((i) => id !== i.id);
    },
  },
});
</script>
