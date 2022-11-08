import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from "./Popover.vue";

describe("Popover.vue", () => {
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
      placement: 'bottom',
      size: 'sm',
      popoverClass: 'test',
      triggerClass: 'test'
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

});
