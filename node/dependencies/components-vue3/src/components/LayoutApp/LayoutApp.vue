<template>
  <div
    data-id="sds-layout-app"
    class="flex flex-col h-screen dark:text-gray-50"
  >
    <div class="bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 flex flex-shrink-0">
      <div class="my-auto">
        <div
          v-if="appSuite"
          class="hidden md:block"
        >
          <a
            v-if="appSuiteUrl"
            :href="appSuiteUrl"
            class="text-xl flex hover:underline"
            @click="navigate(null, { title: appSuite, href: appSuiteUrl }, $event)"
          >
            <span class="text-red-400 font-bold">{{ appSuitePrefix }}</span>
            <span>{{ appSuite }}</span>
          </a>
          <p
            v-else
            class="text-xl flex"
          >
            <span class="text-red-400 font-bold">{{ appSuitePrefix }}</span>
            <span>{{ appSuite }}</span>
          </p>
        </div>
        <button
          v-if="appSuite || appName"
          ref="mobileMenuOpenBtn"
          class="flex md:hidden gap-1 focus:outline-none"
          @click="showMobileMenu = !showMobileMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="text-white h-6 w-6 inline-block"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          ><g
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><path d="M7.95 11.95h32" /><path d="M7.95 23.95h32" /><path d="M7.95 35.95h32" /></g></svg>
          <span class="text-xl leading-6 flex">
            <span
              v-if="appSuitePrefix"
              class="text-red-400 font-bold"
            >{{ appSuitePrefix }}</span>
            <span
              v-if="appSuite"
            >{{ appSuite }}</span>
            <span
              v-if="appName && !hideAppNameInMobileHeader"
              class="text-sm text-left font-bold text-gray-200 overflow-ellipsis text-ellipsis overflow-hidden whitespace-nowrap w-40 mt-auto mr-auto"
              :class="[appSuite ? 'ml-1' : '']"
            >{{ appName }}</span>
          </span>
        </button>
      </div>
      <div class="ml-auto my-auto flex gap-2 flex-shrink-0">
        <!-- @slot Suite header content. @binding collapsed -->
        <slot
          name="suite-header"
          :collapsed="collapsed"
        />
      </div>
    </div>
    <div class="flex flex-grow flex-shrink-0">
      <!-- Mobile sidebar close section -->
      <transition
        enter-active-class="transition-opacity ease-linear duration-150"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <button
          v-if="showMobileMenu"
          class="bg-black bg-opacity-40 fixed inset h-screen w-screen z-50 md:hidden"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span class="sr-only">Toggle mobile menu</span>
        </button>
      </transition>

      <!-- Mobile sidebar -->
      <transition
        enter-active-class="transition-transform ease-linear duration-150"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform ease-linear duration-150"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <aside
          v-if="showMobileMenu"
          ref="mobileSidebarContainer"
          class="md:hidden fixed w-2/3 z-50 bg-gray-900 dark:bg-gray-800 text-white flex-shrink-0"
          @keydown="checkKeyEvent"
        >
          <button
            ref="mobileMenuCloseBtn"
            class="sr-only"
            @click="showMobileMenu = !showMobileMenu"
          >
            <span class="sr-only">Toggle mobile menu</span>
          </button>
          <div class="h-screen flex flex-col sticky top-0">
            <div class="overflow-y-auto flex-grow overscroll-contain">
              <div
                v-if="appName"
                class="sticky top-0 bg-gray-900 dark:bg-gray-800 z-10 flex gap-2 p-4"
              >
                <!-- @slot App icon content. @binding classList -->
                <slot
                  name="app-icon"
                  class-list="block w-8 h-8 my-auto flex-shrink-0"
                >
                  <span
                    v-if="!hideAppIcon"
                    class="block w-8 h-8 my-auto flex-shrink-0"
                  >
                    <template v-if="appUrl">
                      <a
                        :href="appUrl"
                        @click="navigate(null, { title: appName, href: appUrl }, $event)"
                      >
                        <img
                          v-if="appIconUrl"
                          :src="appIconUrl"
                          :alt="appName"
                          class="w-8 h-8"
                        >
                        <svg
                          v-else
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          class="w-8 h-8 fill-current text-blue-400"
                        ><path d="M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z" /></svg>
                      </a>
                    </template>
                    <template v-else>
                      <img
                        v-if="appIconUrl"
                        :src="appIconUrl"
                        :alt="appName"
                        class="w-8 h-8"
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="w-8 h-8 fill-current text-blue-400"
                      ><path d="M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z" /></svg>
                    </template>
                  </span>
                </slot>
                <a
                  v-if="appUrl"
                  :href="appUrl"
                  class="text-lg font-bold my-auto hover:underline"
                  @click="navigate(null, { title: appName, href: appUrl }, $event)"
                >
                  {{ appName }}
                </a>
                <span
                  v-else
                  class="text-lg font-bold my-auto"
                >
                  {{ appName }}
                </span>
              </div>
              <nav
                v-if="sidebarNavigationItems.length > 0"
                class="grid grid-cols-1 pb-24"
              >
                <!-- @slot Mobile sidebar navigation content wrapper. @binding items, collapsed -->
                <slot
                  name="mobile-sidebar-navigation"
                  :items="sidebarNavigationItems"
                  :collapsed="collapsed"
                >
                  <template
                    v-for="item in sidebarNavigationItems"
                    :key="item.id"
                  >
                    <template v-if="item.items">
                      <button
                        :href="item.href"
                        class="flex relative w-full gap-2 pl-2 px-4 py-2 border-l-8"
                        :class="{
                          'border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100': !itemsGroupIsActive(item) || showItemsGroup(item),
                          'text-white border-danger': itemsGroupIsActive(item) && !showItemsGroup(item)
                        }"
                        @click="toggleItemsGroup(item)"
                      >
                        <!-- @slot Mobile sidebar navigation item icon content. @binding item, classList -->
                        <slot
                          name="mobile-sidebar-navigation-item-icon"
                          :item="item"
                          class-list="inline-block w-8 h-8 my-auto flex-shrink-0"
                        >
                          <span
                            v-if="!hideSidebarIcons"
                            class="inline-block w-8 h-8 my-auto flex-shrink-0"
                          >
                            <img
                              v-if="item.iconUrl"
                              :src="item.iconUrl"
                              :alt="item.title"
                              class="w-8 h-8"
                            >
                            <svg
                              v-else
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              class="w-8 h-8 fill-current"
                            ><path d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z" /></svg>
                          </span>
                        </slot>
                        <span class="inline-block my-auto text-left">{{ item.title }}</span>
                        <span
                          v-if="itemsGroupBadgeCount(item) && !showItemsGroup(item)"
                          class="inline-block my-auto"
                        >
                          <span
                            class="flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
                          >{{ itemsGroupBadgeCount(item) }}</span>
                        </span>
                        <svg
                          class="absolute w-4 h-4 right-2 top-1/3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            v-if="showItemsGroup(item)"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            d="M19 9l-7 7-7-7"
                          />
                          <path
                            v-else
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      <template v-if="showItemsGroup(item)">
                        <a
                          v-for="subitem in item.items"
                          :key="subitem.id"
                          :href="subitem.href"
                          class="flex relative gap-2 px-4 py-2 border-l-8"
                          :class="{
                            'border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100': !subitem.active,
                            'text-white border-danger pointer-events-none': subitem.active,
                            'pl-12': !hideSidebarIcons,
                            'pl-8': hideSidebarIcons
                          }"
                          @click="navigate(item, subitem, $event)"
                        >
                          <span
                            class="inline-block my-auto text-left"
                          >{{ subitem.title }}</span>
                          <span
                            v-if="subitem.badgeCount"
                            class="inline-block my-auto"
                          >
                            <span
                              class="flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
                            >{{ subitem.badgeCount }}</span>
                          </span>
                        </a>
                      </template>
                    </template>
                    <a
                      v-else
                      :href="item.href"
                      class="flex relative gap-2 pl-2 px-4 py-2 border-l-8"
                      :class="{
                        'border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100': !item.active,
                        'text-white border-danger pointer-events-none': item.active
                      }"
                      @click="navigate(null, item, $event)"
                    >
                      <!-- @slot Mobile sidebar navigation item icon content. @binding item, classList -->
                      <slot
                        name="mobile-sidebar-navigation-item-icon"
                        :item="item"
                        class-list="inline-block w-8 h-8 my-auto flex-shrink-0"
                      >
                        <span
                          v-if="!hideSidebarIcons"
                          class="inline-block w-8 h-8 my-auto flex-shrink-0"
                        >
                          <img
                            v-if="item.iconUrl"
                            :src="item.iconUrl"
                            :alt="item.title"
                            class="w-8 h-8"
                          >
                          <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="w-8 h-8 fill-current"
                          ><path d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z" /></svg>
                        </span>
                      </slot>
                      <span class="inline-block my-auto text-left">{{ item.title }}</span>
                      <span
                        v-if="item.badgeCount"
                        class="inline-block my-auto"
                      >
                        <span
                          class="flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
                        >{{ item.badgeCount }}</span>
                      </span>
                    </a>
                  </template>
                </slot>
              </nav>
            </div>
          </div>
        </aside>
      </transition>

      <!-- Desktop sidebar -->
      <aside
        class="hidden md:block bg-gray-900 dark:bg-gray-800 text-white flex-shrink-0 z-50"
        :class="[computedSidebarWidth]"
      >
        <div class="h-screen flex flex-col sticky top-0">
          <div class="overflow-y-auto flex-grow overscroll-contain">
            <div
              v-if="appName"
              class="sticky top-0 bg-gray-900 dark:bg-gray-800 z-10"
            >
              <p
                v-if="appName"
                class="flex gap-2 p-4"
              >
                <!-- @slot App icon content. @binding classList -->
                <slot
                  name="app-icon"
                  class-list="block w-8 h-8 my-auto flex-shrink-0"
                >
                  <span
                    v-if="!hideAppIcon"
                    class="block w-8 h-8 my-auto flex-shrink-0"
                  >
                    <template v-if="appUrl">
                      <a
                        :href="appUrl"
                        @click="navigate(null, { title: appName, href: appUrl }, $event)"
                      >
                        <img
                          v-if="appIconUrl"
                          :src="appIconUrl"
                          :alt="appName"
                          class="w-8 h-8"
                        >
                        <svg
                          v-else
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          class="w-8 h-8 fill-current text-blue-400"
                        ><path d="M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z" /></svg>
                      </a>
                    </template>
                    <template v-else>
                      <img
                        v-if="appIconUrl"
                        :src="appIconUrl"
                        :alt="appName"
                        class="w-8 h-8"
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="w-8 h-8 fill-current text-blue-400"
                      ><path d="M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z" /></svg>
                    </template>
                  </span>
                </slot>
                <a
                  v-if="appUrl && appName"
                  :href="appUrl"
                  class="text-lg font-bold my-auto hover:underline"
                  :class="{ 'sr-only': enableCollapsibleSidebar && collapsed }"
                  @click="navigate(null, { title: appName, href: appUrl }, $event)"
                >
                  {{ appName }}
                </a>
                <span
                  v-else-if="appName"
                  class="text-lg font-bold my-auto"
                  :class="{ 'sr-only': enableCollapsibleSidebar && collapsed }"
                >
                  {{ appName }}
                </span>
              </p>
            </div>
            <nav
              v-if="sidebarNavigationItems.length > 0"
              class="grid grid-cols-1 pb-24"
            >
              <!-- @slot Nav content. @binding items, collapsed -->
              <slot
                name="sidebar-navigation"
                :items="sidebarNavigationItems"
                :collapsed="collapsed"
              >
                <template
                  v-for="item in sidebarNavigationItems"
                  :key="item.id"
                >
                  <template v-if="item.items">
                    <sds-tooltip
                      placement="right"
                      :disabled="!collapsed"
                    >
                      <template #trigger>
                        <button
                          :href="item.href"
                          class="flex relative w-full gap-2 pl-2 px-4 py-2 border-l-8"
                          :class="{
                            'border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100': !itemsGroupIsActive(item) || showItemsGroup(item),
                            'text-white border-danger': itemsGroupIsActive(item) && (!showItemsGroup(item) || collapsed)
                          }"
                          @click="toggleItemsGroup(item)"
                        >
                          <!-- @slot Sidebar navigation item icon content. @binding item, classList -->
                          <slot
                            name="sidebar-navigation-item-icon"
                            :item="item"
                            class-list="inline-block w-8 h-8 my-auto flex-shrink-0"
                          >
                            <span
                              v-if="!hideSidebarIcons"
                              class="inline-block w-8 h-8 my-auto flex-shrink-0"
                            >
                              <img
                                v-if="item.iconUrl"
                                :src="item.iconUrl"
                                :alt="item.title"
                                class="w-8 h-8"
                              >
                              <svg
                                v-else
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                class="w-8 h-8 fill-current"
                              ><path d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z" /></svg>
                            </span>
                          </slot>
                          <span
                            v-if="!collapsed"
                            class="inline-block my-auto text-left"
                          >{{ item.title }}</span>
                          <span
                            v-if="itemsGroupBadgeCount(item) && !showItemsGroup(item)"
                            class="inline-block my-auto"
                            :class="{
                              'absolute bottom-1 right-1': collapsed
                            }"
                          >
                            <span
                              class="flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
                            >{{ itemsGroupBadgeCount(item) }}</span>
                          </span>
                          <svg
                            v-if="!collapsed"
                            class="absolute w-4 h-4 right-2 top-1/3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              v-if="showItemsGroup(item)"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              d="M19 9l-7 7-7-7"
                            />
                            <path
                              v-else
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </template>
                      <p>{{ item.title }}</p>
                    </sds-tooltip>
                    <template v-if="!collapsed && showItemsGroup(item)">
                      <a
                        v-for="subitem in item.items"
                        :key="subitem.id"
                        :href="subitem.href"
                        class="flex relative gap-2 px-4 py-2 border-l-8"
                        :class="{
                          'border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100': !subitem.active,
                          'text-white border-danger pointer-events-none': subitem.active,
                          'pl-12': !hideSidebarIcons,
                          'pl-8': hideSidebarIcons
                        }"
                        @click="navigate(item, subitem, $event)"
                      >
                        <span
                          class="inline-block my-auto text-left"
                        >{{ subitem.title }}</span>
                        <span
                          v-if="subitem.badgeCount"
                          class="inline-block my-auto"
                        >
                          <span
                            class="flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
                          >{{ subitem.badgeCount }}</span>
                        </span>
                      </a>
                    </template>
                  </template>
                  <sds-tooltip
                    v-else
                    placement="right"
                    :disabled="!collapsed"
                  >
                    <template #trigger>
                      <a
                        :href="item.href"
                        class="flex relative gap-2 pl-2 px-4 py-2 border-l-8"
                        :class="{
                          'border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100': !item.active,
                          'text-white border-danger pointer-events-none': item.active
                        }"
                        @click="navigate(null, item, $event)"
                      >
                        <!-- @slot Sidebar navigation item icon content. @binding item, classList -->
                        <slot
                          name="sidebar-navigation-item-icon"
                          :item="item"
                          class-list="inline-block w-8 h-8 my-auto flex-shrink-0"
                        >
                          <span
                            v-if="!hideSidebarIcons"
                            class="inline-block w-8 h-8 my-auto flex-shrink-0"
                          >
                            <img
                              v-if="item.iconUrl"
                              :src="item.iconUrl"
                              :alt="item.title"
                              class="w-8 h-8"
                            >
                            <svg
                              v-else
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              class="w-8 h-8 fill-current"
                            ><path d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z" /></svg>
                          </span>
                        </slot>
                        <span
                          v-if="!collapsed"
                          class="inline-block my-auto text-left"
                        >{{ item.title }}</span>
                        <span
                          v-if="item.badgeCount"
                          class="inline-block my-auto"
                          :class="{
                            'absolute bottom-1 right-1': collapsed
                          }"
                        >
                          <span
                            class="flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
                          >{{ item.badgeCount }}</span>
                        </span>
                      </a>
                    </template>
                    <p>{{ item.title }}</p>
                  </sds-tooltip>
                </template>
              </slot>
            </nav>
          </div>
          <div
            v-if="enableCollapsibleSidebar"
            class="flex-shrink-0 sticky bottom-0 bg-gray-900 dark:bg-gray-800"
          >
            <button
              id="btn-collapse-toggle"
              :title="
                collapsed ? 'Expand sidebar ( [ )' : 'Collapse sidebar ( [ )'
              "
              class="px-3 ml-auto border-transparent rounded-none tab tab-block tab-dark"
              :class="{ 'w-full': collapsed, 'w-auto': !collapsed }"
              @click="toggleCollapse"
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  v-if="collapsed"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <section class="flex flex-col items-stretch flex-grow min-w-0">
        <main class="flex-grow pb-4 bg-gray-100 dark:bg-gray-900">
          <div
            v-if="!hidePageHeader"
            class="bg-white dark:bg-gray-700 shadow px-4 py-3 sticky top-0 z-40 flex flex-col gap-4 md:flex-row"
          >
            <div class="flex-grow my-auto flex flex-row gap-2">
              <!-- @slot Page title content. @binding collapsed -->
              <slot
                name="page-title"
                :collapsed="collapsed"
                class-list="text-2xl font-semibold text-gray-700 dark:text-gray-100"
              >
                <p class="text-2xl font-semibold text-gray-700 dark:text-gray-100">
                  {{ pageTitle }}
                </p>
              </slot>
            </div>
            <div
              v-if="hasSlot('page-header')"
              class="flex-shrink-0 my-auto flex flex-col md:flex-row gap-2"
            >
              <!-- @slot Page header content. @binding collapsed -->
              <slot
                name="page-header"
                :collapsed="collapsed"
              />
            </div>
          </div>
          <div class="p-4">
            <!-- @slot Page content. @binding collapsed -->
            <slot :collapsed="collapsed" />
          </div>
        </main>

        <!-- @slot Footer top content. Great for application-specific footer content. -->
        <slot name="footer-top" />

        <!-- Footer -->
        <footer class="bg-gray-900 dark:bg-gray-800 text-xs text-light px-4 pt-4 pb-16 flex flex-col lg:flex-row gap-4">
          <div class="flex-shrink-0 flex order-2 lg:order-1">
            <sds-link
              href="https://sei.cmu.edu"
              title="Software Engineering Institute"
              class="my-auto"
              external
            >
              <img
                class="h-10"
                :src="wordmark"
                alt="Software Engineering Institute"
              >
            </sds-link>
          </div>
          <div
            v-if="hasSlot('footer-middle')"
            class="flex-shrink flex lg:mx-auto order-1 lg:order-2"
          >
            <div class="my-auto">
              <!-- @slot Footer middle (top in mobile) content. -->
              <slot name="footer-middle" />
            </div>
          </div>
          <div class="flex-shrink-0 flex lg:ml-auto order-3">
            <div class="my-auto">
              <!-- @slot Footer right (bottom in mobile) content. @binding year -->
              <slot
                name="footer-right"
                :year="year"
              >
                <p>&copy; {{ year }} Carnegie Mellon University</p>
              </slot>
            </div>
          </div>
        </footer>

        <div
          v-if="hasSlot('actions-bar')"
          class="sticky bottom-0 z-40"
        >
          <!-- @slot Actions content. Great for application-specific actionable content. -->
          <slot name="actions-bar" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SdsLink from '../Link/Link.vue'
import SdsTooltip from '../Tooltip/Tooltip.vue'
import wordmark from '../../assets/images/Software_Engineering_Institute_Unitmark_White.svg'

interface LayoutAppSidebarNavItem {
  id: number | string
  href: string
  active: boolean
  title: string
  badgeCount?: number
  iconUrl?: string
  items?: LayoutAppSidebarNavItem[]
}

export default defineComponent({
  name: 'SdsLayoutApp',
  components: {
    SdsLink,
    SdsTooltip,
  },
  props: {
    /**
     * The v-model that determines collapsed state.
     */
    modelValue: { type: Boolean, default: false },
    /**
     * The width class of the non-collapsed sidebar when not in a mobile responsive view.
     */
    sidebarWidth: { type: String, default: 'w-72' },
    /**
     * Determines whether to enable collapsing functionality.
     * 
     * Ensure to have an icon for every item in the **sidebarNavigationItems** array for this to look nice.
     * 
     * Including an **appIconUrl** will also improve the user experience.
     */
    enableCollapsibleSidebar: { type: Boolean, default: false },
    /**
     * The app suite name's prefix (styled in red) for the layout.
     */
    appSuitePrefix: { type: String, default: 'SEI' },
    /**
     * The app suite name for the layout.
     */
    appSuite: { type: String, default: null },
    /**
     * The app suite url for the layout.
     */
    appSuiteUrl: { type: String, default: null },
    /**
     * The app name for the layout.
     */
    appName: { type: String, default: null },
    /**
     * The app url for the layout.
     */
    appUrl: { type: String, default: null },
    /**
     * Determines whether to hide the **appName** in the mobile header.
     * 
     * This is useful when an application's name is very long.
     */
    hideAppNameInMobileHeader: { type: Boolean, default: false },
    /**
     * The app icon url for the layout.
     */
    appIconUrl: { type: String, default: null },
    /**
     * The page title for the layout.
     */
    pageTitle: { type: String, default: null },
    /**
     * Determines whether to hide the page header.
     */
    hidePageHeader: { type: Boolean, default: false },
    /**
     * The sidebar navigation array for the layout.
     * 
     * Each item should have a unique **id**, **title**, **active**, and **href** key value pair. **badgeCount** and **iconUrl** are optional.
     * 
     * Item object:
     * 
     * { id: Number, title: String, active: Boolean, href: String, badgeCount: Number, iconUrl: String }
     */
    sidebarNavigationItems: { type: Array as PropType<LayoutAppSidebarNavItem[]>, default: () => [] },
    /**
     * Determines whether to hide the app icon.
     */
    hideAppIcon: { type: Boolean, default: false },
    /**
     * Determines whether to hide the icons in the sidebar.
     */
    hideSidebarIcons: { type: Boolean, default: false },
  },
  emits: ['update:modelValue', 'navigate'],
  data() {
    return {
      showMobileMenu: false,
      openItemsGroups: [] as LayoutAppSidebarNavItem[]
    }
  },
  computed: {
    wordmark() {
      return wordmark
    },
    year() {
      const d = new Date();
      return d.getFullYear();
    },
    computedSidebarWidth() {
      if (!this.enableCollapsibleSidebar) return this.sidebarWidth
      return this.collapsed ? 'w-auto' : this.sidebarWidth;
    },
    collapsed: {
      get() {
        return this.modelValue;
      },
      set(val: boolean) {
        /**
         * Emmitted when modelValue changes.
         */
        this.$emit("update:modelValue", val);
      },
    },
  },
  watch: {
    showMobileMenu(value) {
      if (value) {
        // prevent scrolling
        document.documentElement.classList.add("layout-app-internal-prevent-scroll");
        this.$nextTick(() => {
          (this.$refs.mobileMenuCloseBtn as HTMLButtonElement).focus()
        })
      } else {
        // enable scrolling
        document.documentElement.classList.remove("layout-app-internal-prevent-scroll");
        (this.$refs.mobileMenuOpenBtn as HTMLButtonElement).focus()
      }
    },
    collapsed(value) {
      if (value) {
        this.openItemsGroups = []
      }
    }
  },
  mounted() {
    // Setup collapse functionality
    document.addEventListener("keyup", this.handleDocumentKeyUp);
  },
  unmounted() {
    // enable scrolling
    document.documentElement.classList.remove("layout-app-internal-prevent-scroll");

    // Destroy collapse functionality
    document.removeEventListener("keyup", this.handleDocumentKeyUp);
  },
  methods: {
    itemsGroupBadgeCount(item: LayoutAppSidebarNavItem) {
      if (!item.items) { return null }
      let count = 0
      item.items.forEach(i => {
        if (i.badgeCount) {
          count = count + i.badgeCount
        }
      })
      return count
    },
    itemsGroupIsActive(item: LayoutAppSidebarNavItem) {
      return item.items && item.items.filter(i => i.active).length
    },
    showItemsGroup(item: LayoutAppSidebarNavItem) {
      return this.openItemsGroups.filter(i => i.id === item.id).length
    },
    toggleItemsGroup(item: LayoutAppSidebarNavItem) {
      this.collapsed = false
      if (this.showItemsGroup(item)) {
        this.openItemsGroups = this.openItemsGroups.filter(
          i => i.id !== item.id
        )
      } else {
        this.openItemsGroups.push(item)
      }
    },
    hasSlot(title: string) {
      return !!this.$slots[title]
    },
    navigate(group: LayoutAppSidebarNavItem | null, item: Pick<LayoutAppSidebarNavItem, 'title' | 'href'>, event: Event) {
      // Close the mobile menu
      this.showMobileMenu = false
      /**
       * Emmited when a navigation menu item has been clicked.
       *
       * Sends a payload of the clicked item and the click event: { group, item, event }
       */
      this.$emit('navigate', { group, item, event })
    },
    toggleCollapse() {
      if (!this.enableCollapsibleSidebar) {
        this.collapsed = false
      } else {
        this.collapsed = !this.collapsed;
      }
    },
    handleDocumentKeyUp($event: KeyboardEvent) {
      if (!$event.target) return
      const tagName = ($event.target as HTMLElement).tagName.toLowerCase();
      if (tagName === "textarea") return;
      if (tagName === "input") return;
      // toggle collapse on "[" key
      if ($event.key === "[") this.toggleCollapse();
    },
    checkKeyEvent(event: KeyboardEvent) {
      // close modal and return early if escape
      if (event.key === "Escape") {
        this.showMobileMenu = false;
        return;
      }
      const focusableList = (this.$refs.mobileSidebarContainer as HTMLElement).querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      // escape early if only 1 or no elements to focus
      if (focusableList.length < 2 && event.key === "Tab") {
        event.preventDefault();
        return;
      }
      const last = focusableList.length - 1;
      if (
        event.key === "Tab" &&
        event.shiftKey === false &&
        event.target === focusableList[last]
      ) {
        event.preventDefault();
        (focusableList[0] as HTMLElement).focus();
      } else if (
        event.key === "Tab" &&
        event.shiftKey === true &&
        event.target === focusableList[0]
      ) {
        event.preventDefault();
        (focusableList[last] as HTMLElement).focus();
      }
    }
  }
})
</script>

<style lang="postcss">
.layout-app-internal-prevent-scroll {
  overflow: hidden;
}

@screen md {
  .layout-app-internal-prevent-scroll {
    overflow: visible;
  }
}
</style>