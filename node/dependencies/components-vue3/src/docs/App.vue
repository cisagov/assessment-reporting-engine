<template>
  <sds-layout-app
    v-model="collapsed"
    :app-suite="appSuite"
    :app-name="appName"
    :app-url="appUrl"
    :app-icon-url="appIconUrl"
    :page-title="pageTitle"
    :sidebar-navigation-items="sidebarNavigationItems"
    :enable-collapsible-sidebar="enableCollapsibleSidebar"
    @navigate="navigate"
  >
    <template #suite-header>
      Suite header content
    </template>
    <!-- <template #sidebar-navigation-item-icon="{ item, classList }">
      <img
        v-if="item.iconUrl"
        :src="item.iconUrl"
        :class="classList"
      >
      <div
        v-else
        :class="classList"
      />
    </template> -->
    <template #page-header>
      Page header content
      <!-- <sds-button variant="default">
        Export
      </sds-button>
      <sds-button variant="default">
        Save Search
      </sds-button> -->
      <!-- <div class="flex flex-col lg:flex-row gap-2">
        <sds-button variant="danger">
          Add accomplishment
        </sds-button>
        <sds-search-box variant="danger" />
      </div> -->
    </template>
    <p class="my-8 text-2xl">
      Datepicker
    </p>
    <DocTables :component="Datepicker" />
    <examples />
    <components />
    <template #actions-bar>
      <div class="bg-blue-500/90 backdrop-blur dark:bg-blue-800 px-6 py-2 shadow">
        <div class="flex gap-2">
          <p class="my-auto text-white font-semibold">
            This is a text message
          </p>
          <sds-button
            variant="light"
            class="ml-auto"
            outline
          >
            Cancel
          </sds-button>
          <sds-button
            variant="default"
            class="text-primary hover:text-black hover:bg-white"
          >
            Save something
          </sds-button>
        </div>
      </div>
    </template>
    <template #footer-top>
      <div class="px-4 py-2 border">
        Testing
      </div>
    </template>
    <template #footer-middle>
      Footer middle content
    </template>
  </sds-layout-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Datepicker from "../components/Datepicker/Datepicker.vue"
import DocTables from './components/DocTables.vue'
import Components from './components/Components.vue'
import Examples from './components/Examples.vue'

export default defineComponent({
  name: "AppPage",
  components: {
    DocTables,
    Components,
    Examples,
  },
  data() {
    return {
      Datepicker,
      collapsed: false,
      appSuite: 'MIS',
      appName: 'Travel Requests',
      pageTitle: 'Dashboard',
      // appIconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png',
      // appIconUrl: null,
      // appUrl: '#',
      // enableCollapsibleSidebar: true,
      // sidebarNavigationItems: [
      //   { id: 1, title: 'Dashboard', active: true, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 2, title: 'About SEI', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 3, title: 'News & Events', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 4, title: 'Divisions', active: false, href: '#', badgeCount: 9, iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 5, title: 'Research & Projects asdf sdaf ', active: false, href: '#', badgeCount: 999, iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 6, title: 'HR & Benefits', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 7, title: 'Policies', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 8, title: 'Workplace Services', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 9, title: 'Help & FAQ', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      // ],
      appIconUrl: null,
      appUrl: '#',
      enableCollapsibleSidebar: true,
      sidebarNavigationItems: [
        { id: 1, title: 'Dashboard', active: true, href: '#' },
        { 
          id: 2, 
          title: 'About SEI',
          iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png',
          items: [
            { id: 1, title: 'First item', active: false, href: '#' },
            { id: 2, title: 'Second item', active: false, href: '#', badgeCount: 22 },
            { id: 3, title: 'Third item', active: false, href: '#' },
            { id: 4, title: 'Fourth item', active: false, href: '#' },
          ]
        },
        { 
          id: 3, 
          title: 'Research & Projects With A Large Badge Count',
          items: [
            { id: 1, title: 'First item', active: false, href: '#' },
            { id: 2, title: 'Second item', active: false, href: '#', badgeCount: 93 },
            { id: 3, title: 'Third item With A Large Badge Count With A Large Badge Count', active: false, href: '#', badgeCount: 400 },
            { id: 4, title: 'Fourth item', active: false, href: '#' },
          ]
        },
        { id: 4, title: 'News & Events', active: false, href: '#' },
        { id: 5, title: 'Divisions', active: false, href: '#', badgeCount: 9 },
        { id: 6, title: 'Research & Projects With A Large Badge Count', active: false, href: '#', badgeCount: 999 },
        { id: 7, title: 'HR & Benefits', active: false, href: '#' },
        { id: 8, title: 'Policies', active: false, href: '#' },
        { id: 9, title: 'Workplace Services', active: false, href: '#' },
        { id: 10, title: 'Help & FAQ', active: false, href: '#' },
      ]
    }
  },
  methods: {
    navigate({ group, item, event }: any) {
      event.preventDefault()
      this.sidebarNavigationItems = this.sidebarNavigationItems.map((i) => {
        if (group) {
          if (group.id === i.id) {
            i.items && i.items.forEach((x) => {
              x.active = x.id === item.id
              return x
            })
          } else {
            i.active = false
            i.items && i.items.forEach((x) => {
              x.active = false
            })
          }
        } else {
          i.items && i.items.forEach((x) => {
            x.active = false
          })
          i.active = i.id === item.id
        }
        return i
      })
      console.log(item)
    }
  }
});
</script>
