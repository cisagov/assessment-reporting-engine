<template>
  <client-only>
    <teleport to="body">
      <transition
        enter-active-class="transition-opacity duration-75"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-75"
        leave-to-class="opacity-0"
        @after-enter="showContent = true"
        @after-leave="showModal = false"
      >
        <div
          v-if="showModal"
          ref="modalContainer"
          data-id="sds-modal"
          class="
        fixed
        inset-0
        block
        h-full
        px-2
        py-0
        overflow-auto
        bg-black bg-opacity-50
        sds-modal
      "
          :class="[zIndexClass]"
          @mousedown.self="close"
          @keydown="checkKeyEvent"
        >
          <transition
            enter-active-class="transition-all duration-75"
            enter-from-class="transform scale-90 opacity-0"
            leave-active-class="transition-all duration-75"
            leave-to-class="transform scale-90 opacity-0"
            @after-leave="showModal = false"
          >
            <div
              v-if="showContent"
              role="dialog"
              :aria-labelledby="titleWrapper && (titleWrapper as HTMLElement).id || undefined"
              class="
            relative
            block
            w-full
            mx-auto
            my-2
            bg-white
            border
            rounded
            shadow-xl
            dark:bg-gray-800 dark:border-gray-700
            md:my-8
          "
              :class="{
                [zIndexClass]: true,
                'md:max-w-sm': size === 'sm',
                'md:max-w-xl': size === 'md',
                'md:max-w-xl lg:max-w-4xl': size === 'lg',
                'md:max-w-xl lg:max-w-4xl xl:max-w-6xl': size === 'xl',
              }"
            >
              <header class="flex items-center p-6 pb-0">
                <div
                  v-if="hasTitleSlot"
                  ref="titleWrapper"
                  v-uid
                  class="text-xl leading-tight"
                >
                  <!-- @slot Modal title content. -->
                  <slot name="title" />
                </div>
                <button
                  v-focus
                  aria-label="close"
                  class="
                inline-block
                p-0
                ml-auto
                text-3xl text-gray-500
                bg-transparent
                border-0
                cursor-pointer
                hover:text-gray-700 hover:outline-none
                focus:text-gray-700 focus:outline-none
                dark:hover:text-gray-300 dark:focus:text-gray-300
                active:text-gray-500
                dark:active:text-gray-600
              "
                  @click="close"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </header>
              <main class="p-6">
                <!-- @slot Modal content. -->
                <slot />
              </main>
              <footer
                v-if="hasFooterSlot"
                class="p-6 pt-0"
              >
                <!-- @slot Modal footer content. -->
                <slot name="footer" />
              </footer>
            </div>
          </transition>
        </div>
      </transition>
    </teleport>
  </client-only>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onUnmounted, Directive, PropType } from "vue";
import ClientOnly from '../ClientOnly/ClientOnly.vue'
import { Uid } from '@shimyshack/uid';

export default defineComponent({
  name: "SdsModal",
  components: {
    ClientOnly
  },
  directives: {
    uid: Uid,
    focus: {
      mounted(el: HTMLElement) {
        el.focus();
      },
    } as Directive,
  },
  props: {
    /**
     * The v-model that determines the show/hide state of the modal.
     */
    modelValue: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines the size of the modal.
     */
    size: {
      type: String as PropType<'xl' | 'lg' | 'md' | 'sm' | ''>,
      default: "md",
    },
    /**
     * The z-index for the popover.
     */
    zIndex: { type: String as PropType<'0' | '10' | '20' | '30' | '40' | '50' | 'auto' | ''>, required: false, default: '50' },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const titleWrapper = ref(null)
    const modalContainer = ref(null)
    const showContent = ref(false)

    const hasTitleSlot = computed(() => {
      return !!slots.title;
    })

    const hasFooterSlot = computed(() => {
      return !!slots.footer;
    })

    const showModal = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        /**
         * Emmitted when modelValue changes.
         */
        emit("update:modelValue", value);
      },
    })

    const zIndexClass = computed(() => {
      switch (props.zIndex) {
        case '0':
          return 'z-0'
        case '10':
          return 'z-10'
        case '20':
          return 'z-20'
        case '30':
          return 'z-30'
        case '40':
          return 'z-40'
        case '50':
          return 'z-50'
        case 'auto':
          return 'z-auto'
        default:
          return ''
      }
    })

    onUnmounted(() => {
      removeDomChanges();
    })

    const makeDomChanges = () => {
      if (typeof document === "undefined") return;
      document.documentElement.classList.add("modal-prevent-scroll");
      setTimeout(() => {
        document.addEventListener("keyup", handleEscKey);
      }, 0);
    }

    const removeDomChanges = () => {
      if (typeof document === "undefined") return;
      document.documentElement.classList.remove("modal-prevent-scroll");
      document.removeEventListener("keyup", handleEscKey);
    }

    const close = () => {
      showContent.value = false;
    }

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    }

    const checkKeyEvent = (event: KeyboardEvent) => {
      if (modalContainer.value === null) return;

      // close modal and return early if escape
      if (event.key === "Escape") {
        close();
        return;
      }
      const focusableList: NodeListOf<HTMLElement> = (modalContainer.value as unknown as HTMLElement).querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      // escape early if only 1 or no elements to focus
      if (focusableList.length < 2 && event.key === "Tab") {
        event.preventDefault();
        return;
      }

      const last = focusableList.length - 1;

      if (
        event.key === "Tab" &&
        event.shiftKey === false &&
        event.target === focusableList[last]
      ) {
        event.preventDefault();
        focusableList[0].focus();
      } else if (
        event.key === "Tab" &&
        event.shiftKey === true &&
        event.target === focusableList[0]
      ) {
        event.preventDefault();
        focusableList[last].focus();
      }
    }

    watch(showModal, (value) => {
      showContent.value = (value as boolean);
      if (typeof document === "undefined") return;
      if (value) {
        makeDomChanges();
      } else {
        removeDomChanges();
      }
    }, { immediate: true })

    return {
      titleWrapper,
      modalContainer,
      showContent,

      hasTitleSlot,
      hasFooterSlot,
      showModal,
      zIndexClass,

      makeDomChanges,
      removeDomChanges,
      close,
      handleEscKey,
      checkKeyEvent,
    }
  }
});
</script>

<style>
.modal-prevent-scroll {
  overflow: hidden;
}
</style>