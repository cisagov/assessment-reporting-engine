import SdsLink from './Link.vue';

export default {
  title: 'Navigation/Link',
  parameters: {
    docs: {
      description: {
        component: 'A link is a textual navigation element that directs users to a different location on the page or site.',
      },
    },
  },
  component: SdsLink,
  argTypes: {
    variant: {
      options: ['', 'primary', 'secondary', 'tertiary', 'danger', 'light', 'dark'],
      control: { type: 'select' }
    },
    cta: {
      options: [true, false],
      control: { type: 'radio' }
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => ({
  components: { SdsLink },
  setup() {
    return { args }
  },
  template: `
    <sds-link
      href="#"
      v-bind="args"
    >
      Example link
    </sds-link>
  `
});

export const Default = Template.bind({});
Default.args = {
  variant: 'primary'
};
