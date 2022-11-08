import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from "./FilterByDropdown.vue";

describe("FilterByDropdown.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Component, {
      directives: {
        'uid': {
          created(el) {
            el.setAttribute('id', 'unique-id')
          }
        }
      }
    })
    expect(wrapper.vm).toBeTruthy();
  });

  it("matches snapshot with no props assigned", async () => {
    const props = {};
    const wrapper = shallowMount(Component, {
      props,
      directives: {
        'uid': {
          created(el) {
            el.setAttribute('id', 'unique-id')
          }
        }
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
