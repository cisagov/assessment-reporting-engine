<template>
  <SdsSection type="accented">
    <template #title>
      <strong class="text-sm uppercase">Props</strong>
    </template>
    <SdsTable
      class="table-prose"
      :fields="propFields"
      :items="propItems"
      sort-by="name"
    >
      <template #cell(name)="{ value, item }">
        <strong class="font-semibold text-sm">{{ value }}<sup
          v-if="item.required"
          class="text-red-500"
        >*</sup></strong>
      </template>
      <template #cell(description)="{ value, item }">
        <div class="space-y-2">
          <div
            v-if="value"
            class="text-sm"
            v-html="value"
          />
          <div>
            <code
              v-if="item.type"
              class="bg-gray-100 p-1 text-xs rounded-sm lowercase"
            >{{ item.type.join(', ') }}</code>
          </div>
        </div>
      </template>
      <template #cell(default)="{ value }">
        <code class="bg-gray-100 p-1 text-xs rounded-sm">{{ value }}</code>
      </template>
    </SdsTable>
    <p class="mt-4">
      <small><sup class="text-red-500 font-semibold">*</sup> denotes a required prop.</small>
    </p>
  </SdsSection>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  component: { type: Object, default: () => ({}) }
})

const propFields = ref([
  { key: 'name', label: 'Name', sortable: true },
  { key: 'description', label: 'Description' },
  { key: 'default', label: 'Default' }
])
const propDefinitions = computed(() => props.component.props)
const docsDefinitions = computed(() => props.component.docs)

const propItems = ref<{ name: string, description?: string, type?: string[], required?: boolean, default?: unknown }[]>([])

for (const prop in propDefinitions.value) {
  const value = propDefinitions.value[prop]

  // Type
  const type: string[] = []
  if (!value.type) {
    type.push('undefined')
  } else if (Array.isArray(value.type)) {
    value.type.forEach((i: any) => {
      type.push(i.name && i.name.toLowerCase() || i.toLowerCase())
    })
  } else {
    type.push(value.type.name && value.type.name.toLowerCase() || value.type && value.type.toLowerCase())
  }

  let defaultValue
  if (type.includes('boolean')) {
    defaultValue = value.default ? 'true' : 'false'
  } else if (type.includes('string') && typeof value.default !== 'undefined') {
    defaultValue = value.default ? `'${value.default}'` : "''"
  } else if (!value.default) {
    defaultValue = 'undefined'
  } else {
    defaultValue = value.default
  }

  let description
  const tmpDoc = (
    docsDefinitions.value &&
    docsDefinitions.value.props &&
    docsDefinitions.value.props.find((i: { name: string, description: string }) => i.name === prop)
  )
  if (tmpDoc) {
    description = tmpDoc.description
  }

  propItems.value.push({
    name: prop,
    // ...propDefinitions.value[prop],
    type,
    description,
    default: defaultValue
  })
}
</script>