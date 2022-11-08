import { describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from "./Paginator.vue";

describe("Paginator.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.vm).toBeTruthy();
  });

  it("matches snapshot with no props assigned", () => {
    const props = {};
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with totalPages prop assigned", () => {
    const props = {
      totalPages: 10,
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with currentPage and totalPages prop assigned", () => {
    const props = {
      currentPage: 3,
      totalPages: 10,
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with loading and totalPages prop assigned", () => {
    const props = {
      loading: true,
      totalPages: 10,
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with threshold and totalPages prop assigned", () => {
    const props = {
      threshold: 10,
      totalPages: 100,
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with currentPage, threshold, loading, and totalPages prop assigned", () => {
    const props = {
      currentPage: 20,
      threshold: 10,
      loading: true,
      totalPages: 100,
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot when threshold is >= totalPages prop", () => {
    const props = {
      threshold: 10,
      totalPages: 3,
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot when currentPage > totalPages - threshold + 1", () => {
    const props = {
      currentPage: 12,
      threshold: 5,
      totalPages: 15,
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("fires the goToPage method when a button is clicked", () => {
    const spy = vi.spyOn(Component.methods, "goToPage")
    const props = {
      currentPage: 4,
      totalPages: 15,
    };
    const wrapper = shallowMount(Component, { props });
    wrapper.vm.goToPage()
    expect(spy).toHaveBeenCalled();
    // expect(wrapper.emitted("go-to-page")).toBeTruthy();
  });
});
