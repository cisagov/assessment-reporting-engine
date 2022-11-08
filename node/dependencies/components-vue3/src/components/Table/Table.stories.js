import SdsTable from './Table.vue';

export default {
  title: 'Data Visualization/Table',
  parameters: {
    docs: {
      description: {
        component: 'A table shows information in columns and rows and can be sorted by the column.',
      },
    },
  },
  component: SdsTable,
  argTypes: {}
};

const Template = (args) => ({
  components: { SdsTable },
  setup() {
    return { args }
  },
  template: `
    <sds-table v-bind="args" class="table-prose">
      <template #cell(title)="{ item, value, format }">
        <p>{{ value }}</p>
        <p class="text-sm text-gray-500">
          ID: {{ item.id }} was created on {{ format('createdDate') }}
        </p>
      </template>
      <template #cell(actions)="{ item }">
        <button @click="edit(item.id)">Edit</button>
      </template>
    </sds-table>
  `,
  methods: {
    edit (id) {
      console.log(id)
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  fields: [
    { key: "id", label: 'ID', header: true },
    { key: "title", label: 'Title', sortable: true },
    { key: "lastDelivered", label: 'Last Delivered', sortable: true, format: (date) => date.toLocaleDateString() },
    { key: "createdDate", label: 'Created Date', hidden: true, format: (date) => date.toLocaleDateString() },
    { key: 'actions', label: 'Actions' }
  ],
  items: [
    { id: 1, title: "Apple", lastDelivered: new Date("01/01/2019"), createdDate: new Date("02/23/2009") },
    { id: 2, title: "Banana", lastDelivered: new Date("10/01/2020"), createdDate: new Date("05/13/2010") },
    { id: 3, title: "Cantaloupe", lastDelivered: new Date("12/01/2020"), createdDate: new Date("01/13/2012") },
    { id: 4, title: "Durian", lastDelivered: new Date("02/01/2021"), createdDate: new Date("12/09/2013") },
    { id: 5, title: "Elderberry", lastDelivered: new Date("01/01/2019"), createdDate: new Date("04/10/2017") },
  ],
  sortBy: 'lastDelivered',
  sortDesc: true
};

