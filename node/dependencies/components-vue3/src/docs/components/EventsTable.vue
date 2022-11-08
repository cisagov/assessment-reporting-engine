<template>
  <SdsSection
    v-if="items.length > 0"
    type="accented"
  >
    <template #title>
      <strong class="text-sm uppercase">Events</strong>
    </template>
    <SdsTable
      class="table-prose"
      :fields="fields"
      :items="items"
      sort-by="name"
    >
      <template #cell(name)="{ value }">
        <strong class="font-semibold text-sm">{{ value }}</strong>
      </template>
      <template #cell(description)="{ value }">
        <div
          v-if="value"
          class="text-sm"
          v-html="value"
        />
      </template>
    </SdsTable>
  </SdsSection>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  component: { type: Object, default: () => ({}) }
})

const docsDefinitions = computed(() => props.component.docs)

const fields = ref([
  { key: 'name', label: 'Name', sortable: true },
  { key: 'description', label: 'Description' }
])

const items = ref<{ name: string, description?: string }[]>([])

if (docsDefinitions.value && docsDefinitions.value.events) {
  for (const event in docsDefinitions.value.events) {
    const value = docsDefinitions.value.events[event]

    items.value.push({
      name: value.name,
      description: value.description
    })
  }
}
</script>