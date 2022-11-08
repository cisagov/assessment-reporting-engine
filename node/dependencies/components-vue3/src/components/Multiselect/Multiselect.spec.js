import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from "./Multiselect.vue";

describe("Multiselect.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.vm).toBeTruthy();
  });

  it("matches snapshot with no props assigned", () => {
    const props = {};
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
