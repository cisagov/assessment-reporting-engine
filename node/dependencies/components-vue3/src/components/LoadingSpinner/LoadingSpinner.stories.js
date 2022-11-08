import SdsLoadingSpinner from './LoadingSpinner.vue';
import SdsButton from '../Button/Button.vue';

export default {
  title: 'Feedback/Loading Spinner',
  parameters: {
    docs: {
      description: {
        component: 'A loading spinner is an animated spinning icon that lets users know their action is being processed or that content is loading.',
      },
    },
  },
  component: SdsLoadingSpinner,
  argTypes: {
    size: {
      options: ['sm','md', 'lg', 'auto'],
      control: { type: 'select' },
      description :'Set the size of the spinner.'
    },
  }
};

const Template = (args) => ({
  components: { SdsLoadingSpinner },
  setup() {
    return { args }
  },
  template: `
    <sds-loading-spinner v-bind="args" />
  `
});

export const Default = Template.bind({});
Default.args = {};

const InsideButtonTemplate = (args) => ({
  components: { SdsLoadingSpinner, SdsButton },
  setup() {
    return { args }
  },
  template: `
    <sds-button variant="primary" class="flex gap-2">
      Button Text
      <sds-loading-spinner v-bind="args" class="my-auto" />
    </sds-button>
  `
});

export const InsideButton = InsideButtonTemplate.bind({});
InsideButton.args = {
  size: 'sm'
};
