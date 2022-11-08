<template>
  <div
    data-id="sds-dropdown-header"
    class="px-4 py-1 text-sm font-semibold leading-5 text-gray-500 dark:text-gray-300"
  >
    <!-- @slot Dropdown header content. -->
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SdsDropdownHeader',
})
</script>