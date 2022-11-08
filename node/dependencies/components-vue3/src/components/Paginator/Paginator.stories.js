import SdsPaginator from './Paginator.vue';

export default {
  title: 'Navigation/Paginator',
  parameters: {
    docs: {
      description: {
        component: 'A paginator is a specialized group of buttons that allows users to browse large amounts of content in smaller chunks across multiple pages.',
      },
    },
  },
  component: SdsPaginator,
  argTypes: {
  }
};

const Template = (args) => ({
  components: { SdsPaginator },
  setup() {
    return { args }
  },
  template: `
    <sds-paginator v-bind="args" />
  `
});

export const Default = Template.bind({});
Default.args = {
  currentPage: 3,
  totalPages: 10
};

