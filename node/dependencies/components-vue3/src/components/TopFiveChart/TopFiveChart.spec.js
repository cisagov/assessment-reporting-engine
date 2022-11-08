import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from "./TopFiveChart.vue";

describe("TopFiveChart.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.vm).toBeTruthy();
  });

  it("matches snapshot with no props assigned", () => {
    const props = {};
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with urls", () => {
    const props = {
      title: "Top Five Chart (with urls, view all url, showPercent)",
      viewAllUrl: "https://seinet.sei.cmu.edu",
      entries: [
        {
          id: 1,
          title: "Test 1",
          count: 40,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 2,
          title: "Test 2",
          count: 30,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 3,
          title: "Test 3",
          count: 15,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 4,
          title: "Test 4",
          count: 10,
          url: "https://seinet.sei.cmu.edu",
        },
        { id: 5, title: "Test 5", count: 3, url: "https://seinet.sei.cmu.edu" },
        { id: 6, title: "Test 6", count: 2, url: "https://seinet.sei.cmu.edu" },
      ],
      showPercent: true,
      progressColor: "cyan",
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with urls, doNotLinkEntries", () => {
    const props = {
      title: "Top Five Chart (with urls, doNotLinkEntries)",
      entries: [
        {
          id: 1,
          title: "Test 1",
          count: 40,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 2,
          title: "Test 2",
          count: 30,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 3,
          title: "Test 3",
          count: 15,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 4,
          title: "Test 4",
          count: 10,
          url: "https://seinet.sei.cmu.edu",
        },
        { id: 5, title: "Test 5", count: 3, url: "https://seinet.sei.cmu.edu" },
        { id: 6, title: "Test 6", count: 2, url: "https://seinet.sei.cmu.edu" },
      ],
      doNotLinkEntries: true,
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with no urls", () => {
    const props = {
      title: "Top Five Chart (no urls)",
      entries: [
        { id: 1, title: "Test 1", count: 40 },
        { id: 2, title: "Test 2", count: 30 },
      ],
      progressColor: "orange",
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with no data", () => {
    const props = {
      title: "Top Five Chart (no data)",
      entries: [],
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with malformed data", () => {
    const props = {
      title: "Top Five Chart (malformed data)",
      entries: [
        { id: 1, title: "Test 1", count: 40 },
        { id: 2, title: "Test 2" },
      ],
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
