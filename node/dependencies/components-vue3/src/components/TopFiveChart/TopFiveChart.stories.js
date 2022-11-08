import SdsTopFiveChart from './TopFiveChart.vue';

export default {
  title: 'Data Visualization/Top Five Chart',
  parameters: {
    docs: {
      description: {
        component: 'A top five chart visualizes the top five results as proportional horizontal rectangular blocks. ',
      },
    },
  },
  component: SdsTopFiveChart,
  argTypes: {
    progressColor: {
      options: ['red', 'green', 'orange', 'blue', 'teal', 'purple', 'indigo', 'pink', 'gray'],
      type: 'select'
    }
  }
};

const Template = (args) => ({
  components: { SdsTopFiveChart },
  setup() {
    return { args }
  },
  template: `
    <sds-top-five-chart v-bind="args" />
  `
});

export const Default = Template.bind({});
Default.args = {
  title: 'Example title',
  entries: [
    { id: 1, title: "Item 1", url: "https://designsystem.sei.cmu.edu", count: 100 },
    { id: 2, title: "Item 2", url: "https://designsystem.sei.cmu.edu", count: 80 },
    { id: 3, title: "Item 3", url: "https://designsystem.sei.cmu.edu", count: 40 },
    { id: 4, title: "Item 4", url: "https://designsystem.sei.cmu.edu", count: 32 },
    { id: 5, title: "Item 5", url: "https://designsystem.sei.cmu.edu", count: 20 },
  ],
  viewAllUrl: 'https://designsystem.sei.cmu.edu'
};

