<template>
  <div
    data-id="sds-layout-sei-external-masthead"
    class="py-8 bg-white"
  >
    <div class="container px-4 mx-auto md:px-8">
      <div
        v-if="page.nav"
        class="grid grid-cols-1 gap-8 lg:grid-cols-12"
      >
        <div class="order-2 lg:col-span-3 lg:order-1">
          <layout-sei-external-nav :page="page" />
        </div>
        <div
          v-if="page.title || page.subtitle || page.description"
          class="order-1 lg:col-span-9 lg:order-2"
        >
          <layout-sei-external-header-content :page="page" />
        </div>
      </div>
      <template v-else>
        <layout-sei-external-header-content
          v-if="page.title || page.subtitle || page.description"
          :page="page"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutSeiExternalNav from "../LayoutSeiExternalNav/LayoutSeiExternalNav.vue";
import LayoutSeiExternalHeaderContent from "../LayoutSeiExternalHeaderContent/LayoutSeiExternalHeaderContent.vue";

export default defineComponent({
  name: 'SdsLayoutSeiExternalMasthead',
  components: {
    LayoutSeiExternalNav,
    LayoutSeiExternalHeaderContent,
  },
  props: {
    /**
     * An object containing various properties that display in the masthead.
     */
    page: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
