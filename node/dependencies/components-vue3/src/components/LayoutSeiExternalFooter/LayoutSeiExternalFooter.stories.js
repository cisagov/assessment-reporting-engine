import SdsLayoutSeiExternalFooter from './LayoutSeiExternalFooter.vue';

export default {
  title: 'Layouts/Layout SEI External/Layout SEI External Footer',
  parameters: {
    docs: {
      description: {
        component: 'The footer for the LayoutSeiExternal layout.',
      },
    },
  },
  component: SdsLayoutSeiExternalFooter,
  argTypes: {}
};

const Template = (args) => ({
  components: { SdsLayoutSeiExternalFooter },
  setup() {
    return { args }
  },
  template: `
    <sds-layout-sei-external-footer v-bind="args"></sds-layout-sei-external-footer>
  `
});

export const Default = Template.bind({});
Default.args = {};

