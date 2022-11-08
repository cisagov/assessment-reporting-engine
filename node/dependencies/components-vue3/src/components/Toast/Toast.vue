<template>
  <div
    data-id="sds-toast"
    role="alert"
    aria-live="polite"
    class="w-full max-w-sm bg-white rounded shadow-lg pointer-events-auto dark:bg-gray-700"
    @mouseenter="clearTimer"
    @mouseleave="setTimer"
  >
    <div class="overflow-hidden rounded ring-1 ring-black ring-opacity-5">
      <div class="p-4">
        <div class="flex toasts-start">
          <div class="flex-shrink-0">
            <!-- Heroicon name: check-circle -->
            <svg
              v-if="variant"
              :class="{
                ' text-green-400 dark:text-green-300':
                  variant && variant === 'success',
                ' text-blue-400 dark:text-blue-300':
                  variant && variant === 'info',
                ' text-orange-500 dark:text-orange-400':
                  variant && variant === 'warning',
                ' text-red-400 dark:text-red-300':
                  variant && variant === 'danger',
              }"
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <!-- Success -->
              <path
                v-if="variant === 'success'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />

              <!-- Info -->
              <path
                v-if="variant === 'info'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />

              <!-- Warning -->
              <path
                v-if="variant === 'warning'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />

              <!-- Danger -->
              <path
                v-if="variant === 'danger'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p
              v-if="title"
              class="text-sm font-medium leading-5 text-gray-900 dark:text-gray-100"
            >
              {{ title }}
            </p>
            <p
              v-if="text"
              class="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-300"
            >
              {{ text }}
            </p>
          </div>
          <div class="flex flex-shrink-0 ml-4">
            <button
              class="inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-600 hover:text-gray-600 dark:focus:text-gray-100 dark:hover:text-gray-100"
              @click="removeToast"
            >
              <!-- Heroicon name: x -->
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
  name: 'SdsToast',
  props: {
    /**
     * Determines the id of the component.
     */
    id: { type: Number, required: true },
    /**
     * Determines the theme color of the component.
     */
    variant: { type: String as PropType<'success' | 'info' | 'warning' | 'danger'>, default: 'success' },
    /**
     * Determines the title content of the component.
     */
    title: { type: String, required: true },
    /**
     * Determines the text content of the component.
     */
    text: { type: String, required: true },
    /**
     * Determines the wait time in milliseconds before automatically emitting the "remove" event for this component.
     */
    autoHideDelay: { type: Number, default: 5000 },
    /**
     * Determines whether to ignore the autoHideDelay property.
     */
    noAutoHide: { type: Boolean, default: false },
  },
  emits: ['remove'],
  data() {
    return {
      timer: null as null | ReturnType<typeof setTimeout>,
    };
  },
  mounted() {
    this.setTimer();
  },
  unmounted() {
    this.clearTimer();
  },
  methods: {
    removeToast() {
      /**
       * Emits an event with the "id" property as its payload.
       *
       * The parent component (typically the Toaster component) can then remove the toast from its toast array.
       */
      this.$emit("remove", this.id);
    },
    clearTimer() {
      if (!this.timer) return;
      clearTimeout(this.timer);
    },
    setTimer() {
      this.clearTimer();
      if (this.noAutoHide) return;
      this.timer = setTimeout(() => {
        this.removeToast();
      }, this.autoHideDelay);
    },
  },
});
</script>
