import SdsLayoutSeiExternalWordmark from './LayoutSeiExternalWordmark.vue';

export default {
  title: 'Layouts/Layout SEI External/Layout SEI External Wordmark',
  parameters: {
    docs: {
      description: {
        component: 'The wordmark for the LayoutSeiExternal layout.',
      },
    },
  },
  component: SdsLayoutSeiExternalWordmark,
  argTypes: {}
};

const Template = (args) => ({
  components: { SdsLayoutSeiExternalWordmark },
  setup() {
    return { args }
  },
  template: `
    <sds-layout-sei-external-wordmark v-bind="args"></sds-layout-sei-external-wordmark>
  `
});

export const Default = Template.bind({});
Default.args = {};

