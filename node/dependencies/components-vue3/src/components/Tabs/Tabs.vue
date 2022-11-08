<template>
  <div
    ref="root"
    v-uid
    data-id="sds-tabs"
  >
    <div
      class="overflow-x-auto"
      :class="{
        'bg-gray-100 dark:bg-gray-700 rounded-t': type === 'folder'
      }"
    >
      <ul
        role="tablist"
        class="flex whitespace-nowrap z-10"
      >
        <li
          v-for="tab in tabs"
          :key="tab.key"
          role="presentation"
          :class="{
            'mr-auto': tab.align === 'left',
            'ml-auto': tab.align === 'right',
            'mx-auto': tab.align === 'center'
          }"
        >
          <component
            :is="tab.tag || 'button'"
            :id="`sds-tabs-${root?.id}__${tab.key}__tab`"
            :class="{
              'opacity-50': tab.disabled,
              'pointer-events-none': tab.disabled || tab.active,
              'text-sm inline-block rounded-t py-2 px-4 font-bold': type === 'folder',
              'bg-white dark:bg-gray-800 border-l border-t border-r text-gray-700 dark:border-gray-500 dark:text-gray-100': type === 'folder' && tab.active,
              'text-blue-500 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100':
                type === 'folder' && !tab.active,
              'tab tab-underline tab-red': type === 'underline',
              'tab tab-block tab-red': type === 'block',
              'active': (type === 'underline' || type === 'block') && tab.active,
              'disabled': (type === 'underline' || type === 'block') && tab.disabled,
            }"
            :href="tab.tag === 'a' && tab.href || undefined"
            :target="tab.tag === 'a' && tab.href && tab.external ? '_blank' : undefined"
            :rel="tab.tag === 'a' && tab.href && tab.external ? 'noopener noreferrer' : undefined"
            :type="tab.tag === 'button' ? 'button' : undefined"
            :disabled="tab.disabled"
            :tabindex="tab.disabled ? -1 : undefined"
            :aria-selected="tab.active"
            :aria-controls="`sds-tabs-${root?.id}__${tab.key}__tab-content`"
            :data-active="tab.active ? true : undefined"
            role="tab"
            @click="changeTab(tab)"
          >
            <!-- @slot Dynamic tab. Used to for custom HTML within a tab. -->
            <slot :name="`tab(${tab.key})`">
              {{ tab.title }}
            </slot>
          </component>
        </li>
      </ul>
    </div>
    <template v-for="tab in tabs">
      <div
        v-if="tab.active"
        :id="`sds-tabs-${root?.id}__${tab.key}__tab-content`"
        :key="tab.key"
        :aria-labelby="`sds-tabs-${root?.id}__${tab.key}__tab`"
        role="tabpanel"
        tabindex="0"
      >
        <!-- @slot Dynamic tab panel content. Used to inject content into the panel for an active tab. -->
        <slot
          v-if="tab.active"
          :name="`panel(${tab.key})`"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Uid } from '@shimyshack/uid'

interface ITab {
  key: string
  tag?: 'button' | 'a'
  title?: string
  href?: string
  align?: 'left' | 'right' | 'center'
  external?: boolean
  active?: boolean
  disabled?: boolean
}

export default {
  name: 'SdsTabs',
  directives: {
    uid: Uid
  }
}
</script>

<script setup lang="ts">
import { PropType, ref, computed } from 'vue'

const props = defineProps({
  /**
   * Determines the array of tab objects.
   * 
   * Format of tab object:
   * 
   * ```
   * {
   *   key: string
   *   tag?: 'button' | 'a'
   *   title?: string
   *   href?: string
   *   align?: 'left' | 'right' | 'center'
   *   external?: boolean
   *   active?: boolean
   *   disabled?: boolean
   * }
   * ```
   */
  modelValue: { type: Array as PropType<ITab[]>, default: () => [] },
  /**
   * The overall look and feel of the component.
   */
  type: { type: String as PropType<'folder' | 'underline' | 'block'>, default: 'folder' },
  /**
   * Allows for code execution prior to changing tabs.
   * 
   * Provides the selected `tab` for general use.
   * 
   * Must call an `open()` callback to complete the process.
   * 
   * A `cancel()` callback can be called to cancel
   * the process.
   * 
   * Example definition in parent component:
   * 
   * ```
   * async willChangeTab(tab, open, cancel) {
   *  try {
   *    await SOME_API_CALL_RESPONSE()
   *    console.log(tab)
   *    // let the open process continue
   *    open()
   *  } catch (e) {
   *    // cancel the open process
   *    cancel()
   *  }
   * }
   * ```
   */
  willChangeTab: { type: Function, default: null },
})

const emit = defineEmits(['update:model-value', 'change'])

const root = ref<HTMLElement>()

const tabs = computed({
  get(): ITab[] {
    return props.modelValue
  },
  set(value: ITab[]) {
    /**
     * Emmitted when the v-model has changed.
     */
    emit('update:model-value', value)
  }
})

const willChangeTabStateDelay = (tab: ITab, fn: Function) => new Promise<void>(async (res, rej) => {
  return fn ? await fn(tab, res, rej) : res()
})

const changeTab = async (tab: ITab) => {
  if (tab.tag === 'a' && tab.href) {
    return true
  } else {
    await willChangeTabStateDelay(tab, props.willChangeTab)
    tabs.value = tabs.value.map((i) => {
      i.active = tab.key === i.key
      return i
    })
    /**
     * Emmitted when a tab has been successfully made active.
     * 
     * Provides the active `tab` object.
     */
    emit('change', tab)
  }
}
</script>