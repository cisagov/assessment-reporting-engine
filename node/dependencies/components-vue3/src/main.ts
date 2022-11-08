import { createApp } from 'vue'
import App from './docs/App.vue';

// SEI Design System
import "@sds/tailwindcss-3/open-sans/index.css";
import "./index.css";
import SdsComponents from "./components";

// Use the following to test /dist version of components
// import SdsComponents from "../dist/index.es";
// import {
//   SdsAutosuggest,
//   SdsCalendar,
//   SdsCharacterCounter,
//   SdsDatepicker,
//   SdsDropdown,
//   SdsDropdownDivider,
//   SdsDropdownHeader,
//   SdsDropdownItem,
//   SdsFilterByDropdown,
//   SdsInput,
//   SdsLayoutFixedSidebar,
//   SdsLayoutSeiExternal,
//   SdsLayoutSeiExternalFooter,
//   SdsLayoutSeiExternalHeader,
//   SdsLayoutSeiExternalHeaderContent,
//   SdsLayoutSeiExternalMasthead,
//   SdsLayoutSeiExternalNav,
//   SdsLayoutSeiExternalWordmark,
//   SdsLayoutStacked,
//   SdsModal,
//   SdsMultiselect,
//   SdsPaginator,
//   SdsRadioGroup,
//   SdsScrollspy,
//   SdsSearchBox,
//   SdsSection,
//   SdsSortableTable,
//   SdsTextarea,
//   SdsToaster,
//   SdsTopFiveChart,
// } from "../dist/index.es"

createApp(App)
  .use(SdsComponents)
  // .use(SdsAutosuggest)
  // .use(SdsCalendar)
  // .use(SdsCharacterCounter)
  // .use(SdsDatepicker)
  // .use(SdsDropdown)
  // .use(SdsDropdownDivider)
  // .use(SdsDropdownHeader)
  // .use(SdsDropdownItem)
  // .use(SdsFilterByDropdown)
  // .use(SdsInput)
  // .use(SdsLayoutFixedSidebar)
  // .use(SdsLayoutSeiExternal)
  // .use(SdsLayoutSeiExternalFooter)
  // .use(SdsLayoutSeiExternalHeader)
  // .use(SdsLayoutSeiExternalHeaderContent)
  // .use(SdsLayoutSeiExternalMasthead)
  // .use(SdsLayoutSeiExternalNav)
  // .use(SdsLayoutSeiExternalWordmark)
  // .use(SdsLayoutStacked)
  // .use(SdsModal)
  // .use(SdsMultiselect)
  // .use(SdsPaginator)
  // .use(SdsRadioGroup)
  // .use(SdsScrollspy)
  // .use(SdsSearchBox)
  // .use(SdsSection)
  // .use(SdsSortableTable)
  // .use(SdsTextarea)
  // .use(SdsToaster)
  // .use(SdsTopFiveChart)
  .mount('#app')
