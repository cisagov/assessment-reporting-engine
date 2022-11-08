<template>
  <div class="space-y-6">
    <PropsTable :component="component" />
    <EventsTable :component="component" />
    <SlotsTable :component="component" />
  </div>
</template>

<script setup lang="ts">
import PropsTable from "./PropsTable.vue"
import SlotsTable from "./SlotsTable.vue"
import EventsTable from "./EventsTable.vue"

defineProps({
  component: { type: Object, default: () => ({}) }
})
</script>