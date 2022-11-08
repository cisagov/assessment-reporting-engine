<template>
  <div class="guide">
    <p>Datapoint</p>
    <div class="p-6 space-y-4">
      <sds-datapoint
        size="lg"
        variant="red"
      >
        {{ datapointModel.toLocaleString() }}
        <template #label>
          Super Mario
        </template>
        <template #context>
          <sds-badge
            variant="teal"
            type="light-border"
          >
            Yahoo!
          </sds-badge>
        </template>
      </sds-datapoint>
      <sds-datapoint>
        400
        <template #label>
          Label
        </template>
        <template #context>
          Context
        </template>
      </sds-datapoint>
      <sds-datapoint
        v-model="datapointModel"
        size="lg"
        variant="orange"
        label="Coffee"
        context="Cups"
      />
    </div>
    <p>Badge</p>
    <div class="p-6 space-y-4">
      <div class="space-x-4">
        <sds-badge type="light-border">
          Badge Content
        </sds-badge>
        <sds-badge type="light">
          Badge Content
        </sds-badge>
        <sds-badge type="medium">
          Badge Content
        </sds-badge>
        <sds-badge type="dark">
          Badge Content
        </sds-badge>
      </div>
      <div class="space-x-4">
        <sds-badge
          type="light-border"
          variant="tan"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="light"
          variant="tan"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="medium"
          variant="tan"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="dark"
          variant="tan"
        >
          Badge Content
        </sds-badge>
      </div>
      <div class="space-x-4">
        <sds-badge
          type="light-border"
          variant="yellow"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="light"
          variant="yellow"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="medium"
          variant="yellow"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="dark"
          variant="yellow"
        >
          Badge Content
        </sds-badge>
      </div>
      <div class="space-x-4">
        <sds-badge
          type="light-border"
          variant="orange"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="light"
          variant="orange"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="medium"
          variant="orange"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="dark"
          variant="orange"
        >
          Badge Content
        </sds-badge>
      </div>
      <div class="space-x-4">
        <sds-badge
          type="light-border"
          variant="pink"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="light"
          variant="pink"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="medium"
          variant="pink"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="dark"
          variant="pink"
        >
          Badge Content
        </sds-badge>
      </div>
      <div class="space-x-4">
        <sds-badge
          type="light-border"
          variant="red"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="light"
          variant="red"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="medium"
          variant="red"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="dark"
          variant="red"
        >
          Badge Content
        </sds-badge>
      </div>
      <div class="space-x-4">
        <sds-badge
          type="light-border"
          variant="purple"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="light"
          variant="purple"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="medium"
          variant="purple"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="dark"
          variant="purple"
        >
          Badge Content
        </sds-badge>
      </div>
      <div class="space-x-4">
        <sds-badge
          type="light-border"
          variant="indigo"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="light"
          variant="indigo"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="medium"
          variant="indigo"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="dark"
          variant="indigo"
        >
          Badge Content
        </sds-badge>
      </div>
      <div class="space-x-4">
        <sds-badge
          type="light-border"
          variant="blue"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="light"
          variant="blue"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="medium"
          variant="blue"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="dark"
          variant="blue"
        >
          Badge Content
        </sds-badge>
      </div>
      <div class="space-x-4">
        <sds-badge
          type="light-border"
          variant="teal"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="light"
          variant="teal"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="medium"
          variant="teal"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="dark"
          variant="teal"
        >
          Badge Content
        </sds-badge>
      </div>
      <div class="space-x-4">
        <sds-badge
          type="light-border"
          variant="green"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="light"
          variant="green"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="medium"
          variant="green"
        >
          Badge Content
        </sds-badge>
        <sds-badge
          type="dark"
          variant="green"
        >
          Badge Content
        </sds-badge>
      </div>
    </div>
    <p>Spinner</p>
    <div class="p-6 space-y-8">
      <sds-loading-spinner size="sm" />
      <sds-loading-spinner />
      <sds-loading-spinner size="lg" />
      <sds-button
        variant="primary"
        class="flex gap-2"
      >
        <sds-loading-spinner
          size="sm"
          class="my-auto"
        /> Testing
      </sds-button>
    </div>
    <p>Tabs</p>
    <div class="p-6 space-y-8">
      <sds-tabs
        v-model="tabs"
        class="bg-white dark:bg-gray-800 p-4"
        @change="changeTab"
      >
        <template #tab(groups)>
          <i>Directorates</i>
        </template>
        <template #panel(groups)>
          <div class="p-4">
            This is the content for groups.
          </div>
        </template>
        <template #panel(workplace-services)>
          <div class="p-4">
            This is the content for workplace services.
          </div>
        </template>
      </sds-tabs>
      <sds-tabs
        v-model="tabs"
        type="underline"
        class="bg-white dark:bg-gray-800 border rounded-b p-4"
        @change="changeTab"
      >
        <template #tab(groups)>
          <i>Directorates</i>
        </template>
        <template #panel(groups)>
          <div class="p-4">
            This is the content for groups.
          </div>
        </template>
        <template #panel(workplace-services)>
          <div class="p-4">
            This is the content for workplace services.
          </div>
        </template>
      </sds-tabs>
      <sds-tabs
        v-model="tabs"
        type="block"
        class="bg-white dark:bg-gray-800 border rounded-b p-4"
        @change="changeTab"
      >
        <template #tab(groups)>
          <i>Groups (custom style)</i>
        </template>
        <template #panel(groups)>
          <div class="p-4">
            This is the content for groups.
          </div>
        </template>
        <template #panel(workplace-services)>
          <div class="p-4">
            This is the content for workplace services.
          </div>
        </template>
      </sds-tabs>
    </div>
    <p>Select</p>
    <div class="p-6">
      <sds-select
        v-model="selectModel"
        :options="selectOptions"
      />
    </div>
    <p>Floating UI</p>
    <div class="p-6 bg-white">
      Dropdown:
      <sds-floating-ui
        :offset="5"
        placement="bottom-start"
        popper-class="absolute border shadow-lg w-56 rounded-md bg-white dark:border-gray-500 dark:bg-gray-700"
      >
        <template #trigger="{ toggle }">
          <sds-button
            variant="primary"
            @click="toggle"
          >
            Hello
          </sds-button>
        </template>
        <template #default="{ close }">
          <div class="py-2">
            <p @click="close">
              This is a dropdown
            </p>
          </div>
        </template>
      </sds-floating-ui>
    </div>
    <div class="p-6 bg-white">
      Tooltip:
      <sds-floating-ui
        popper-class="absolute bg-black text-white text-xs shadow rounded-lg w-32 text-center"
        arrow-class="absolute bg-black w-2 h-2 rotate-45"
        placement-top-arrow-class="-bottom-1"
        placement-right-arrow-class="-left-1"
        placement-bottom-arrow-class="-top-1"
        placement-left-arrow-class="-right-1"
        :will-open="willOpen"
        :will-close="willClose"
      >
        <template #trigger="{ open, close }">
          <sds-button
            variant="primary"
            @mouseover="open"
            @mouseout="close"
          >
            Hello
          </sds-button>
        </template>
        <template #default>
          <div class="p-2">
            <p>News &amp; Events</p>
          </div>
        </template>
      </sds-floating-ui>
    </div>
    <div class="p-6 bg-white">
      Popover:
      <sds-floating-ui
        popper-class="absolute z-10 bg-white border shadow rounded-lg"
        arrow-class="absolute bg-white border w-3 h-3 rotate-45"
        placement-top-arrow-class="-bottom-1.5 border-t-0 border-l-0"
        placement-right-arrow-class="-left-1.5 border-t-0 border-r-0"
        placement-bottom-arrow-class="-top-1.5 border-b-0 border-r-0"
        placement-left-arrow-class="-right-1.5 border-b-0 border-l-0"
        shift
      >
        <template #trigger="{ open, close }">
          <sds-button
            variant="primary"
            @mouseover="open(500)"
            @mouseout="close(500)"
          >
            Hello
          </sds-button>
        </template>
        <template #default="{ open, close }">
          <div
            class="p-4"
            @mouseover="open"
            @mouseout="close(500)"
          >
            <p @click="close">
              This is a popover
            </p>
            <p>lkajsdflkjsdalf</p>
            <p>lkajsdflkjsdalf</p>
            <p>lkajsdflkjsdalf</p>
            <p>lkajsdflkjsdalf</p>
          </div>
        </template>
      </sds-floating-ui>
    </div>
    <p>File Uploader</p>
    <div class="p-8 bg-white">
      <sds-file-uploader
        v-model="fileUploaderModel"
        accept=".jpg, .jpeg, .png, .doc, .docx, .xls, .xlsx, .csv, .json"
        helper-text="Use a JSON, JPG, JPEG, PNG, DOC, DOCX, XLS, XLSX or CSV under 1MB."
        :allowed-filetypes="[
          'image/jpeg',
          'image/png',
          'text/csv',
          'application/json',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ]"
        :filesize="1"
        multiple
      />
      <div class="grid grid-cols-4 gap-4 my-4">
        <div
          v-for="image in uploadedImages"
          :key="image.src"
          class="border rounded p-4"
        >
          <img
            :src="image.src"
            :title="image.caption"
            class="w-64 h-auto"
          >
          <p>{{ image.caption }}</p>
          <sds-input v-model="image.caption" />
          <p>{{ image.name }}</p>
          <p>{{ image.type }}</p>
        </div>
      </div>
      <sds-button
        variant="default"
        @click="fileUploaderModel = []"
      >
        Clear files
      </sds-button>
    </div>
    <div class="p-8 bg-white">
      <sds-file-uploader />
    </div>
    <p>Scroll area</p>
    <sds-scrollspy
      :items="[
        { id: 'scrollspy-test', text: 'Test 1' },
        { id: 'scrollspy-test-2', text: 'Test 2' },
        { id: 'scrollspy-test-3', text: 'Test 3' },
        { id: 'scrollspy-test-4', text: 'Test 4' },
        { id: 'scrollspy-test-5', text: 'Test 5' }
      ]"
      parent="#scrollspy-parent"
      item-class="nav nav-primary nav-underline"
      active-class="active"
      class="nav-group"
    />
    <sds-scroll-area
      id="scrollspy-parent"
      class="h-96 mb-4"
    >
      <p
        id="scrollspy-test"
        class="mb-48 text-4xl text-success"
      >
        test 1
      </p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p
        id="scrollspy-test-2"
        class="mb-48 text-4xl text-success"
      >
        test 2
      </p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p
        id="scrollspy-test-3"
        class="mb-48 text-4xl text-success"
      >
        test 3
      </p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p
        id="scrollspy-test-4"
        class="mb-48 text-4xl text-success"
      >
        test 4
      </p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p
        id="scrollspy-test-5"
        class="mb-48 text-4xl text-success"
      >
        test 5
      </p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </sds-scroll-area>
    <h2 class="mb-6 text-4xl">
      Examples
    </h2>
    <sds-section
      type="raised"
      nav-class="gap-2"
    >
      <template #title>
        <h3 class="text-2xl">
          Hello
        </h3>
      </template>
      <template #subtitle>
        <p>Subtitle text</p>
      </template>
      <template #nav>
        <a
          href="#"
          class="nav nav-pill nav-blue"
        >Option 1</a>
        <a
          href="#"
          class="nav nav-pill nav-blue"
        >Option 2</a>
        <a
          href="#"
          class="nav nav-pill nav-blue active"
        >Option 3</a>
      </template>
      <div>
        <section class="mb-4">
          <sds-popover>
            <template #trigger>
              <sds-link
                href="#"
                variant="primary"
                external
              >
                External link (has a popover)
              </sds-link>
            </template>
            <p>Popover content</p>
          </sds-popover>
        </section>
        <section class="mb-4">
          <h3 class="my-4 text-lg">
            Top Five Chart
          </h3>
          <sds-top-five-chart
            title="Top Five Chart"
            :entries="topFiveEntries"
          />
        </section>
        <div class="mb-4 align-right">
          <h4 class="mb-4 text-lg">
            Toaster
          </h4>
          <sds-toaster v-model="toasts" />
          <button
            class="btn btn-blue"
            @click="generateToast"
          >
            Generate Toast
          </button>

          <h4 class="my-4 text-lg">
            Dropdown (open on hover, custom styling, click btn to go home)
          </h4>
          <sds-dropdown
            title="Dropdown"
            auto
          >
            <div class="text-sm px-2">
              This is going to be a lot of text. This is going to be a lot of
              text. This is going to be a lot of text. This is going to be a lot
              of text.
            </div>
            <sds-dropdown-header>
              <p>Signed in as</p>
              <p class="font-semibold truncate">
                tom@example.com
              </p>
            </sds-dropdown-header>
            <sds-dropdown-divider />
            <sds-dropdown-item
              href="/"
              disabled
            >
              Guide
            </sds-dropdown-item>
            <sds-dropdown-item href="#">
              Support
            </sds-dropdown-item>
            <sds-dropdown-item href="#">
              License
            </sds-dropdown-item>
            <sds-dropdown-divider />
            <form
              method="POST"
              action="#"
            >
              <sds-dropdown-item
                tag="button"
                type="submit"
              >
                Sign out
              </sds-dropdown-item>
            </form>
          </sds-dropdown>

          <sds-dropdown
            :title="`Modal Size: ${modalSize}`"
            placement="bottom-end"
            size="sm"
          >
            <sds-dropdown-header> Select the modal's size </sds-dropdown-header>
            <sds-dropdown-divider />
            <sds-dropdown-item
              tag="button"
              @click="changeModalSize('sm')"
            >
              Small
            </sds-dropdown-item>
            <sds-dropdown-item
              tag="button"
              @click="changeModalSize('md')"
            >
              Medium
            </sds-dropdown-item>
            <sds-dropdown-item
              tag="button"
              @click="changeModalSize('lg')"
            >
              Large
            </sds-dropdown-item>
            <sds-dropdown-item
              tag="button"
              @click="changeModalSize('xl')"
            >
              Extra Large
            </sds-dropdown-item>
          </sds-dropdown>
        </div>

        <h4 class="mb-4 text-lg">
          Sds Textarea & Sds Input
        </h4>
        <sds-textarea
          v-model="maxTextarea.input"
          placeholder="Enter text here"
          :maxlength="2000"
          count-characters
        />
        <sds-input
          v-model="maxTextarea.input"
          placeholder="Enter text here"
          :maxlength="20"
          count-characters
        />

        <sds-tooltip>
          <template #trigger>
            <button
              class="btn btn-blue"
              @click="showModal = true"
            >
              Show Modal Component
            </button>
          </template>
          <p>Click this to show a modal!</p>
        </sds-tooltip>
        <sds-modal
          v-model="showModal"
          :size="modalSize"
        >
          <template #title>
            <h3>Modal title</h3>
          </template>

          <div class="mb-4">
            <p>Let's make sure the modal destroys correctly:</p>
            <a
              href="/"
              class="link link-primary"
            >Go home</a>
          </div>
          <sds-dropdown
            v-model="showModalSizeDropdown"
            :title="`Modal Size: ${modalSize}`"
            btn-class="btn btn-default"
          >
            <sds-dropdown-header>
              <p class="font-semibold text-gray-500">
                Select the modal's size
              </p>
            </sds-dropdown-header>
            <sds-dropdown-divider />
            <sds-dropdown-item
              tag="button"
              @click="changeModalSize('sm')"
            >
              Small
            </sds-dropdown-item>
            <sds-dropdown-item
              tag="button"
              @click="changeModalSize('md')"
            >
              Medium
            </sds-dropdown-item>
            <sds-dropdown-item
              tag="button"
              @click="changeModalSize('lg')"
            >
              Large
            </sds-dropdown-item>
            <sds-dropdown-item
              tag="button"
              @click="changeModalSize('xl')"
            >
              Extra Large
            </sds-dropdown-item>
          </sds-dropdown>
          <template #footer>
            <button
              class="btn btn-red"
              @click="showModal = false"
            >
              Close
            </button>
          </template>
        </sds-modal>

        <h4 class="my-4 text-lg">
          Calendar
        </h4>
        <sds-calendar
          v-model="calendar.date"
          :min="calendar.min"
          :max="calendar.max"
          :mode="calendar.mode"
          :size="calendar.size"
        />

        <form @submit.prevent>
          <sds-datepicker
            v-model="calendar.date"
            :min="calendar.min"
            :max="calendar.max"
            :mode="calendar.mode"
            :size="calendar.size"
            required
          />
          <sds-button
            variant="primary"
            type="button"
            :disabled="calendar.date.start === null || calendar.date.end === null"
          >
            Test button
          </sds-button>
          <sds-datepicker
            v-model="calendar2.date"
            :min="calendar2.min"
            :max="calendar2.max"
            :mode="calendar2.mode"
            :size="calendar2.size"
            required
          />
          <sds-datepicker
            v-model="calendar2.date"
            :min="calendar2.min"
            :max="calendar2.max"
            mode="date"
            :size="calendar2.size"
            required
          />
          <sds-datepicker
            v-model="calendar2.date"
            :min="calendar2.min"
            :max="calendar2.max"
            mode="time"
            :size="calendar2.size"
            required
          />
          <sds-datepicker
            v-model="calendarSingle.date"
            :min="calendarSingle.min"
            :max="calendarSingle.max"
            :mode="calendarSingle.mode"
            :size="calendarSingle.size"
            required
          />
          <sds-datepicker
            v-model="calendarSingle.date"
            :min="calendarSingle.min"
            :max="calendarSingle.max"
            mode="date"
            :size="calendarSingle.size"
            required
          />
          <sds-datepicker
            v-model="calendarSingle.date"
            :min="calendarSingle.min"
            :max="calendarSingle.max"
            mode="time"
            :size="calendarSingle.size"
            required
          />
          <input
            type="submit"
            value="Submit"
            class="mt-4 btn btn-primary"
          >
        </form>

        <h4 class="my-4 text-lg">
          Paginator
        </h4>
        <sds-paginator
          :current-page="paginator.currentPage"
          :total-pages="paginator.totalPages"
        />

        <h4 class="my-4 text-lg">
          Multiselect
        </h4>
        <sds-multiselect
          v-model="multiselect.input"
          :selected="multiselect.selected"
          :options="filteredMultiselectOptions"
          show-clear
          multiple
          taggable
          @update-selected="updateSelected"
        />
        <p>Selected: {{ JSON.stringify(multiselect.selected) }}</p>

        <h4 class="my-4 text-lg">
          Filter By Dropdown
        </h4>
        <div class="space-y-4">
          <div>
            <sds-filter-by-dropdown
              v-model="filterby.options"
              :title="filterByBtnText"
              enable-filter
              enable-sort-options
              @update:model-value="filtered"
            />
          </div>
          <div>
            <sds-filter-by-dropdown
              v-model="filterby.options"
              :title="filterByBtnText"
              variant="primary"
              right
              @update:model-value="filtered"
            />
          </div>
          <ul v-if="filterBySelectedOptions.length > 0">
            <li
              v-for="o in filterBySelectedOptions"
              :key="o.id"
            >
              {{ o.text }}
            </li>
          </ul>
          <p>Filtering by ids: {{ filterby.idsText }}</p>
        </div>

        <h4 class="my-4 text-lg">
          Autosuggest
        </h4>
        <div>
          <sds-autosuggest
            v-model="text"
            :items="items"
            :threshold="2"
            :autosuggest="autosuggest"
            :disable-search="text === ''"
            placeholder="Search for a fruit"
            variant="primary"
            use-built-in-highlighting
            @result="result"
            @search="search"
          />
          <p class="mt-3">
            You performed a search with: {{ searchText }}
          </p>
        </div>

        <h4 class="my-4 text-lg">
          Search Box
        </h4>
        <div class="space-y-4">
          <sds-search-box
            v-model="text"
            placeholder="Search for a fruit"
            :disable-search="text === ''"
            @search="search"
          />
          <sds-search-box
            v-model="text"
            placeholder="Search for a fruit"
            :disable-search="text === ''"
            variant="primary"
            @search="search"
          />
          <sds-search-box
            v-model="text"
            placeholder="Search for a fruit"
            :disable-search="text === ''"
            variant="success"
            @search="search"
          />
          <sds-search-box
            v-model="text"
            placeholder="Search for a fruit"
            :disable-search="text === ''"
            variant="info"
            @search="search"
          />
          <sds-search-box
            v-model="text"
            placeholder="Search for a fruit"
            :disable-search="text === ''"
            variant="warning"
            @search="search"
          />
          <sds-search-box
            v-model="text"
            placeholder="Search for a fruit"
            :disable-search="text === ''"
            variant="danger"
            @search="search"
          />
        </div>

        <h4 class="my-4 text-lg">
          Radio Group
        </h4>
        <sds-radio-group
          v-model="radioModel"
          :options="[
            { text: 'Yes', value: true },
            { text: 'No', value: false },
          ]"
          required
          stacked
          @change="$emit('radioGroupChange')"
        >
          <template #label="{ optionId, option }">
            <label :for="optionId">
              Cool: {{ option.text }}
            </label>
          </template>
        </sds-radio-group>
      </div>
      <sds-table
        class="table-prose"
        :fields="fields"
        :items="tableItems"
        sort-by="lastModified"
        sort-desc
      >
        <template #cell(title)="{ value, item }">
          <p><strong>{{ value }}</strong></p>
          <p class="text-gray-500 text-sm">
            {{ item.author }}
          </p>
        </template>
        <template #cell(actions)="{ item }">
          <sds-button
            variant="default"
            size="sm"
          >
            Do something for: {{ item.id }}
          </sds-button>
        </template>
        <template #head(actions)="{ field }">
          {{ field.label }}
          <sds-button
            variant="default"
            size="sm"
            @click="addField"
          >
            Add field
          </sds-button>
        </template>
      </sds-table>
    </sds-section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExamplesSection",
  emits: ['radioGroupChange', 'hello'],
  data() {
    return {
      datapointModel: 4567,
      fileUploaderModel: [],
      uploadedImages: [] as any,
      tabs: [
        { key: 'home', title: 'Home', disabled: true },
        { key: 'about', title: 'About Us', active: true },
        { key: 'workplace-services', title: 'Workplace Services' },
        { key: 'link-to-google', title: 'Link to Google', tag: 'a', href: 'https://google.com', external: true, disabled: true },
        { key: 'link-trigger', title: 'Link Trigger', href: 'https://google.com' },
        { key: 'groups', align: 'right' }
      ],
      selectModel: 2,
      selectOptions: [
        { id: 1, value: 1, text: 'Option 1' },
        { id: 2, value: 2, text: 'Option 2' },
        { id: 3, value: 3, text: 'Option 3' }
      ],
      disablePopover: true,
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'title', label: 'Title', sortable: true },
        { key: 'lastModified', label: 'Last Modified', sortable: true, format: (date: Date) => date.toLocaleDateString() },
        { key: 'actions', label: 'Actions' }
      ],
      tableItems: [
        { id: 1, title: 'First entry', author: 'Jason Shimkoski', lastModified: new Date() },
        { id: 2, title: 'Second entry', author: 'Steve Scholnick', lastModified: new Date('2021-12-01') },
        { id: 3, title: 'Third entry', author: 'Damon Morda', lastModified: new Date('2021-11-15') },
        { id: 4, title: 'Fourth entry', author: 'Matt Winwood', lastModified: new Date('2022-01-03') }
      ],
      countText: "",
      toasts: [] as any,
      showDropdown: false,
      showModal: false,
      showModalSizeDropdown: false,
      modalSize: "md",
      maxTextarea: {
        input: "",
      },
      calendar: {
        date: { start: null, end: null },
        // date: new Date('03/23/2001'),
        max: null,
        min: null,
        mode: 'dateTime',
        size: 'md'
      },
      calendarSingle: {
        date: null,
        // date: new Date('03/23/2001'),
        max: null,
        min: null,
        mode: 'dateTime',
        size: 'md'
      },
      calendar2: {
        date: { start: null, end: null },
        // date: new Date('03/23/2001'),
        max: null,
        min: null,
        mode: 'dateTime',
        size: 'md'
      },
      paginator: {
        currentPage: 2,
        totalPages: 23,
      },
      multiselect: {
        input: "",
        options: [
          { key: 1, value: "Apple" },
          { key: 2, value: "Banana" },
          { key: 3, value: "Orange" },
          { key: 4, value: "Lemon" },
          { key: 5, value: "Pear" },
        ],
        selected: [],
      },
      filterby: {
        options: [
          { id: 1, text: "Option 1", selected: false },
          { id: 2, text: "Option 2", selected: false },
          { id: 3, text: "Option 3", selected: false },
          { id: 4, text: "Option 4", selected: false },
          { id: 5, text: "Option 5", selected: false },
          { id: 6, text: "Option 6", selected: false },
          { id: 7, text: "Option 7", selected: false },
          { id: 8, text: "Option 8", selected: false },
          { id: 9, text: "Option 9", selected: false },
          { id: 10, text: "Option 10", selected: false },
          { id: 11, text: "Option 11", selected: false },
          { id: 12, text: "Option 12", selected: false },
          { id: 13, text: "Option 13", selected: false },
          { id: 14, text: "Option 14", selected: false },
          { id: 15, text: "Option 15", selected: false },
          { id: 16, text: "Option 16", selected: false },
          { id: 17, text: "Option 17", selected: false },
          { id: 18, text: "Option 18", selected: false },
          { id: 19, text: "Option 19", selected: false },
          { id: 20, text: "Option 20", selected: false },
        ],
        idsText: null,
      },
      text: "",
      items: [] as any,
      fakeAjaxItems: [
        { term: "Apple", payload: "test" },
        {
          term: "Apple lksd kljsdflk jsdflk sdflkj sdflkj sdflk sdflkj sdflk sdflk sdflkj sdflkj sdflkj sdflkj sdflkj sdflksjd f",
          payload: "test",
        },
        { term: "Banana", payload: "test" },
        { term: "Orange", payload: "test" },
        { term: "Pineapple", payload: "test" },
        { term: "Kiwi", payload: "test" },
        { term: "Pomegranate", payload: "test" },
        { term: "Strawberry", payload: "test" },
        { term: "Raspberry", payload: "test" },
        { term: "Watermelon", payload: "test" },
        { term: "Mango", payload: "test" },
      ],
      searchText: "",
      radioModel: true,
      topFiveEntries: [
        {
          id: 1,
          title: "Entry 1",
          url: "https://seinet.sei.cmu.edu",
          count: 20,
        },
        {
          id: 2,
          title: "Entry 2",
          url: "https://seinet.sei.cmu.edu",
          count: 18,
        },
        {
          id: 3,
          title: "Entry 3",
          url: "https://seinet.sei.cmu.edu",
          count: 12,
        },
        {
          id: 4,
          title: "Entry 4",
          url: "https://seinet.sei.cmu.edu",
          count: 8,
        },
        {
          id: 5,
          title: "Entry 5",
          url: "https://seinet.sei.cmu.edu",
          count: 2,
        },
      ],
    };
  },
  computed: {
    filteredMultiselectOptions() {
      return this.multiselect.options.filter((i) =>
        i.value.toLowerCase().includes(this.multiselect.input.toLowerCase())
      );
    },
    filterByBtnText() {
      return this.filterBySelectedOptions.length > 0
        ? "One or more options selected"
        : "No options are selected";
    },
    filterBySelectedOptions() {
      return this.filterby.options.filter((i) => i.selected);
    },
  },
  watch: {
    fileUploaderModel(value) {
      this.uploadedImages = value.map((file: any) => {
        return {
          src: URL.createObjectURL(file),
          isInvalid: file.invalidType || file.invalidSize,
          caption: '',
          name: file.name,
          lastModified: file.lastModified,
          size: file.size,
          type: file.type
        }
      }).filter((file: any) => !file.isInvalid)
    }
  },
  methods: {
    generateToast() {
      const index = Math.floor(Math.random() * Math.floor(4));
      const toasts = [
        {
          id: Math.random(),
          title: "Success Toast",
          text: "This is the content of this toast.",
          variant: "success",
        },
        {
          id: Math.random(),
          title: "Info Toast",
          text: "This is the content of this toast.",
          variant: "info",
        },
        {
          id: Math.random(),
          title: "Warning Toast",
          text: "This is the content of this toast.",
          variant: "warning",
        },
        {
          id: Math.random(),
          title: "Danger Toast",
          text: "This is the content of this toast.",
          variant: "danger",
          noAutoHide: true,
        },
      ];
      this.toasts.unshift(toasts[index]);
    },
    changeModalSize(size: string) {
      this.modalSize = size;
    },

    updateSelected(selections: any) {
      this.multiselect.selected = selections;
    },
    filtered(options: any) {
      this.filterby.idsText = options
        .filter((i: any) => i.selected)
        .map((i: any) => i.id)
        .join(", ");
    },
    result(result: any) {
      console.log(result)
    },
    // Perform a search
    search(q: any) {
      this.$emit("hello", q);
      this.searchText = this.text;
    },

    // Retrieve autosuggest items
    autosuggest() {
      setTimeout(() => {
        this.items = this.fakeAjaxItems.filter((i) => {
          return i.term.toLowerCase().includes(this.text.toLowerCase());
        });
      }, 250);
    },
    addField() {
      this.fields.push({ key: (new Date).toLocaleDateString(), label: 'Test' })
    },
    async willOpen(res: Function, rej: Function) {
      console.log('Pause for 1 seconds to get fake api request')
      await new Promise(r => setTimeout(r, 1000))
      console.log('Open now!')
      res()
    },
    async willClose(res: Function, rej: Function) {
      console.log('Pause for 1 seconds to do something on close')
      await new Promise(r => setTimeout(r, 1000))
      console.log('Close now!')
      res()
    },
    async willChangeTab(tab: any, res: Function, rej: Function) {
      console.log('Pause for 1/2 second to get fake api request', tab)
      await new Promise(r => setTimeout(r, 500))
      console.log('Open now!')
      res()
    },
    changeTab(tab: any) {
      console.log(tab)
    }
  },
});
</script>
