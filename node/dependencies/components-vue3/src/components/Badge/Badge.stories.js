import SdsBadge from './Badge.vue';

export default {
  title: 'Data Visualization/Badge',
  parameters: {
    docs: {
      description: {
        component: 'A badge is a visual indicator used to label, organize, or categorize an item for quick recognition.',
      },
    },
  },
  component: SdsBadge,
  argTypes: {
    variant: {
      options: ['gray', 'tan', 'yellow', 'orange', 'pink', 'red', 'purple', 'indigo', 'blue', 'teal', 'green'],
      control: { type: 'select' }
    },
    type: {
      options: ['light-border', 'light', 'medium', 'dark'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => ({
  components: { SdsBadge },
  setup() {
    return { args }
  },
  template: `
    <sds-badge v-bind="args">Badge</sds-badge>
  `
});

export const Default = Template.bind({});
Default.args = {};

