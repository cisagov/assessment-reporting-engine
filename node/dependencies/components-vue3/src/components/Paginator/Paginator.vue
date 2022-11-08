<template>
  <nav
    v-if="totalPages > 1"
    data-id="sds-paginator"
    class="paginator"
    aria-label="Page navigation"
  >
    <div
      class="btn-toolbar"
      role="toolbar"
    >
      <div class="mr-2 btn-group">
        <button
          :disabled="prevDisabled"
          class="flex space-x-1 btn btn-default"
          title="First"
          @click.prevent="goToPage(1, $event)"
        >
          <svg
            class="w-4 h-4 my-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span class="sr-only sm:not-sr-only">First</span>
        </button>
        <button
          :disabled="prevDisabled"
          class="flex space-x-1 btn btn-default"
          title="Prev"
          @click.prevent="goToPage(currentPage - 1, $event)"
        >
          <svg
            class="w-4 h-4 my-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span class="sr-only sm:not-sr-only">Prev</span>
        </button>
      </div>
      <div
        v-if="totalPages > 1"
        class="hidden btn-group md:block"
      >
        <template
          v-for="(page, key) in pageList"
          :key="key"
        >
          <button
            :class="{
              'shadow-none border-transparent': page === '...',
              active: currentPage === page,
            }"
            :disabled="page === '...' || loading"
            class="btn btn-default"
            @click.prevent="goToPage(page, $event)"
          >
            {{ page.toLocaleString() }}
          </button>
        </template>
      </div>
      <div class="block mx-0 currentPageLabelContainer btn-group md:hidden">
        <span class="inline-block px-3 pt-2 currentPageLabel">
          Page {{ currentPage.toLocaleString() }}
        </span>
      </div>
      <div class="ml-2 btn-group">
        <button
          :disabled="nextDisabled"
          class="flex space-x-1 btn btn-default"
          title="Next"
          @click.prevent="goToPage(currentPage + 1, $event)"
        >
          <span class="sr-only sm:not-sr-only">Next</span>
          <svg
            class="w-4 h-4 my-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          :disabled="nextDisabled"
          class="flex space-x-1 btn btn-default"
          title="Last"
          @click.prevent="goToPage(totalPages, $event)"
        >
          <span class="sr-only sm:not-sr-only">Last</span>
          <svg
            class="w-4 h-4 my-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'SdsPaginator',
  props: {
    /**
     * The active page number.
     */
    currentPage: {
      type: Number,
      default: 1,
    },
    /**
     * The total number of pages.
     */
    totalPages: {
      type: Number,
      default: 0,
    },
    /**
     * Determines whether to show the loading state or not.
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines the page threshold before the ellipsis truncation begins.
     */
    threshold: {
      type: Number,
      default: 5,
    },
  },
  emits: ['go-to-page'],
  computed: {
    prevDisabled() {
      return this.currentPage <= 1 || this.loading;
    },
    nextDisabled() {
      return this.currentPage >= this.totalPages || this.loading;
    },
    pageList() {
      if (this.totalPages <= this.threshold) {
        return Array.apply(null, Array(this.totalPages)).map((x, i) => {
          return i + 1;
        });
      } else if (this.currentPage < this.threshold) {
        const list: Array<number | string> = Array.apply(null, Array(this.threshold)).map((x, i) => {
          return i + 1;
        });
        return list.concat(["...", this.totalPages]);
      } else if (this.currentPage > this.totalPages - this.threshold + 1) {
        const list = [1, "..."];
        return list.concat(
          Array.apply(null, Array(this.threshold)).map((x, i) => {
            return this.totalPages - this.threshold + i + 1;
          })
        );
      } else {
        let list = [1, "..."];
        list = list.concat(
          Array.apply(null, Array(this.threshold - 3)).map((x, i) => {
            return this.currentPage + i - this.threshold + 3;
          })
        );
        list.push(this.currentPage);
        list = list.concat(
          Array.apply(null, Array(this.threshold - 3)).map((x, i) => {
            return this.currentPage + i + 1;
          })
        );
        return list.concat(["...", this.totalPages]);
      }
    },
  },
  methods: {
    goToPage(page: number | string, event: MouseEvent) {
      /**
       * Passes an object to be used by a parent component: { page, event }
       */
      this.$emit("go-to-page", { page, event });
    },
  },
});
</script>
