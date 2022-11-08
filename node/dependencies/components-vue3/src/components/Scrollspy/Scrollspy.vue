<template>
  <nav>
    <a
      v-for="i in items"
      :key="i.id"
      :href="`#${i.id}`"
      data-id="sds-scrollspy"
      :class="{
        [itemClass]: true,
        [activeClass]: activeId === i.id,
        [inactiveClass]: activeId !== i.id
      }"
      @click="parent ? scrollToIdTarget(i.id, $event) : undefined"
    >
      <!-- @slot Default content. Determines the content of the item link. @binding item -->
      <slot :item="i">{{ i.text }}</slot>
    </a>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'SdsScrollspy'
}
</script>

<script setup lang="ts">
import { PropType, computed, ref, onMounted, onUnmounted } from 'vue'
import { throttleAndDebounce } from '../../helpers/throttleAndDebounce'

const props = defineProps({
  /**
   * Determines the items list that is observed when the page scrolls.
   * 
   * This accepts an array of objects.
   * 
   * Example object:
   * 
   * `{ id: string, text: string }`
   * 
   * The object's `id` property should be a unique id for an HTML element. For example,
   * if you want the item to observe `<div id="test">`, the `id` would
   * be `test`.
   * 
   * The object's `text` property should be the content of the link that is observing
   * the page.
   */
  items: {
    type: Array as PropType<{ id: string, text: string }[]>,
    default: () => [],
  },
  /**
   * The HTML selector of the container for the element being spied upon.
   */
  parent: { type: String, default: undefined },
  /**
   * Determines the CSS class list for each item.
   */
  itemClass: { type: String, default: '' },
  /**
   * Determines the CSS class list for the active item.
   */
  activeClass: { type: String, default: '' },
  /**
   * Determines the CSS class list for the inactive items.
   */
  inactiveClass: { type: String, default: '' }
})

const parentEl = computed<HTMLElement | null>(() => {
  if (typeof document === 'undefined') return null
  return props.parent ? document.querySelector(props.parent) : null
})

const activeId = ref()
const lastActiveId = ref()

// magic number to avoid repeated retrieval
const PAGE_OFFSET = 56

const getAnchorTop = (item: { id: string, text: string }): number => {
  const anchor = document.getElementById(item.id) as HTMLAnchorElement
  return anchor ? anchor.getBoundingClientRect().top  - PAGE_OFFSET - 15 : 0
}

const isItemActive = (
  index: number,
  item: { id: string, text: string },
  nextItem: { id: string, text: string } | undefined
): [boolean, string | null] => {
  const scrollTop = parentEl.value && parentEl.value.getBoundingClientRect().top || window.scrollY

  if (index === 0 && scrollTop === 0) {
    return [true, null]
  }

  if (scrollTop < getAnchorTop(item)) {
    return [false, null]
  }

  if (!nextItem || scrollTop < getAnchorTop(nextItem)) {
    return [true, item.id]
  }

  return [false, null]
}

const isInViewport = (item: { id: string, text: string }) => {
  const anchor = document.getElementById(item.id) as HTMLAnchorElement
  const rect = anchor.getBoundingClientRect();
  if (parentEl.value) {
    const parentRect = parentEl.value.getBoundingClientRect()
    return (
      rect.top >= parentRect.top &&
      rect.bottom <= parentRect.bottom
    )
  } else {
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }
}

const setActiveItem = () => {
  const itemsInViewport = [] as { id: string, text: string }[]
  lastActiveId.value = activeId.value

  props.items.forEach(item => {
    if (isInViewport(item)) {
      itemsInViewport.push(item)
    }
  })

  if (itemsInViewport.length) {
    activeId.value = itemsInViewport[0].id
    return
  }

  if (lastActiveId.value) {
    activeId.value = lastActiveId.value
    return
  }

  if (props.items.length && !activeId.value) {
    for (let i = 0; i < props.items.length; i++) {
      const anchor = props.items[i]
      const nextAnchor = props.items[i + 1]

      const [isActive, id] = isItemActive(i, anchor, nextAnchor)

      if (isActive) {
        activeId.value = id
      }
    }
    return
  }
}

const onScroll = throttleAndDebounce(setActiveItem, 100)

onMounted(() => {
  requestAnimationFrame(setActiveItem)
  if (parentEl.value) {
    parentEl.value.addEventListener('scroll', onScroll)
  } else {
    window.addEventListener('scroll', onScroll)
  }
})

onUnmounted(() => {
  if (parentEl.value) {
    parentEl.value.removeEventListener('scroll', onScroll)
  } else {
    window.removeEventListener('scroll', onScroll)
  }
})

const scrollToIdTarget = (id: string, event: Event) => {
  if (!parentEl.value) return
  const el = document.getElementById(id)
  if (!el) return
  event.preventDefault();
  parentEl.value.scrollTop = el.offsetTop - parentEl.value.offsetTop
}
</script>
