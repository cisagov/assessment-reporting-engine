<template>
  <div
    data-id="sds-layout-sei-external-header-content"
    class="space-y-4"
  >
    <h3
      v-if="page.title"
      class="text-3xl text-gray-500 break-words font-extralight"
    >
      {{ page.title }}
    </h3>
    <h4
      v-if="page.subtitle"
      class="text-xl text-gray-500 break-words"
    >
      {{ page.subtitle }}
    </h4>
    <div
      v-if="page.description"
      class="max-w-screen-md prose break-words prose-red"
      v-html="page.description"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'SdsLayoutSeiExternalHeaderContent',
  props: {
    /**
     * An object containing various properties that display in the content.
     */
    page: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
