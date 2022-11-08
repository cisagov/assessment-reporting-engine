<template>
  <div
    data-id="sds-scroll-area"
    class="scroll-area"
  >
    <!-- @slot Scroll area content. -->
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SdsScrollArea'
})
</script>