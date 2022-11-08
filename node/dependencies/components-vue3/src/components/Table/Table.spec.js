import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from "./Table.vue";

describe("Table.vue", () => {
  it("matches snapshot with no props assigned", () => {
    const props = {};
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with items and action col props assigned", () => {
    const props = {
      items: [
        {
          id: 1,
          name: "A title",
          createdDate: new Date("2000-01-01"),
          lastUpdatedDate: new Date("2014-11-12"),
        },
        {
          id: 2,
          name: "B title",
          createdDate: new Date("2013-02-01"),
          lastUpdatedDate: new Date("2013-10-10"),
        },
      ],
      sortBy: "lastUpdatedDate",
      fields: [
        { key: "name", label: "Title", sortable: true },
        { key: "createdDate", label: "Created", sortable: true, format: (date) => date.toLocaleDateString() },
        {
          key: "lastUpdatedDate",
          label: "Last modified",
          sortable: true, format: (date) => date.toLocaleDateString()
        },
      ],
    };
    const wrapper = shallowMount(Component, { props });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with entries but no action col props assigned", () => {
    const props = {
      items: [
        {
          id: 1,
          name: "A title",
          createdDate: new Date("2000-01-01"),
          lastUpdatedDate: new Date("2014-11-12"),
        },
        {
          id: 2,
          name: "B title",
          createdDate: new Date("2013-02-01"),
          lastUpdatedDate: new Date("2013-10-10"),
        },
      ],
      fields: [
        { key: "name", label: "Title", sortable: true },
        { key: "createdDate", label: "Created", sortable: true, format: (date) => date.toLocaleDateString() },
        {
          key: "lastUpdatedDate",
          label: "Last modified",
          sortable: true, format: (date) => date.toLocaleDateString()
        },
        { key: "actions", label: "Actions" }
      ]
    };
    const slots = {
      'cell(actions)': `
        <template #cell(actions)="{item}">
          <button
            class="btn btn-link text-red-300 btn-sm"
            @click="remove(entry)"
          >
            <i class="fas fa-trash"></i>
            Remove entry
          </button>
        </template>
      `,
    };
    const wrapper = shallowMount(Component, { props, slots });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
