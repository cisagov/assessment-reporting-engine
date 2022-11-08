<template>
  <div
    data-id="sds-layout-stacked"
    class="flex flex-col w-full min-h-screen"
  >
    <header
      v-if="hasHeaderSlot"
      class="z-30 flex-shrink"
      :class="{ 'sticky top-0 shadow': stickyHeader }"
    >
      <!-- @slot Header content. -->
      <slot name="header" />
    </header>
    <main class="flex-grow">
      <!-- @slot Page content. -->
      <slot />
    </main>
    <footer
      v-if="hasFooterSlot"
      class="z-20 flex-shrink"
      :class="{ 'sticky bottom-0 shadow': stickyFooter }"
    >
      <!-- @slot Footer content. -->
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'SdsLayoutStacked',
  props: {
    /**
     * Determines whether to make the header sticky or not.
     */
    stickyHeader: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines whether to make the footer sticky or not.
     */
    stickyFooter: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasHeaderSlot(): Boolean {
      return !!this.$slots.header;
    },
    hasFooterSlot(): Boolean {
      return !!this.$slots.footer;
    },
  },
});
</script>
