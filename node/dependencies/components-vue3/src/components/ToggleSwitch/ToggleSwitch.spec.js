import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from "./ToggleSwitch.vue";

describe("ToggleSwitch.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.vm).toBeTruthy();
  });
  it("matches snapshot", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("matches snapshot with no props assigned", () => {
    const propsData = {};
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("matches snapshot with prop assigned", () => {
    const propsData = {
      disabled: false,
      variant: 'primary',
      value: false
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
