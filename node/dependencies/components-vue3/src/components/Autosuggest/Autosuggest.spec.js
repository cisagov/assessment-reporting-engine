import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from "./Autosuggest.vue";

// placeholder: {
//   type: String,
//   default: 'Search'
// },
// // The parent search function we use for search
// search: {
//   type: Function,
//   required: true,
//   default: () => ''
// },
// // The items used by autosuggest
// items: {
//   type: Array,
//   required: false,
//   default: () => []
// },
// // Determines whether our autosuggest items are static or can be dynamically changed outside of this component
// isAsync: {
//   type: Boolean,
//   required: false,
//   default: false
// },
// // The character threshold before autosuggest kicks in
// threshold: {
//   type: Number,
//   required: false,
//   default: 1
// },
// // The query passed from the parent that is used to init the local state this.q
// query: {
//   type: String,
//   required: true,
//   default: ''
// },
// // The query passed from the parent that is used to init the local state this.q
// searchParamQ: {
//   type: String,
//   required: true,
//   default: ''
// },
// // When the input is updated, this will fire off the syncInputState (see the watch section)
// inputUpdated: {
//   type: Boolean,
//   required: true,
//   default: false
// },
// // Determine whether to autofocus the input
// autofocus: {
//   type: Boolean,
//   required: false,
//   default: false
// },
// // Used to keep the local q state in sync with the parent
// syncInputState: {
//   type: Function,
//   required: true,
//   default: () => {
//     return {}
//   }
// },
// // Determines whether we are in SPA mode (used to determine which search box facets to use)
// isGlobalSearch: {
//   type: Boolean,
//   required: false,
//   default: false
// },
// useBuiltInHighlighing: {
//   type: Boolean,
//   default: false
// }

describe("AutosuggestInput.vue", () => {
  it("is a Vue instance", () => {
    const props = {
      search: () => "",
      query: "",
      searchParamQ: "",
      inputUpdated: false,
      syncInputState: () => {
        return {};
      },
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.vm).toBeTruthy();
  });
});
