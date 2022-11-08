import SdsTooltip from './Tooltip.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Utility/Tooltip',
  parameters: {
    docs: {
      description: {
        component: 'A tooltip is a hover component that can clarify a piece of content for users.',
      },
    },
  },
  component: SdsTooltip,
  argTypes: {
    placement: {
      options: ["auto", "left", "top", "right", "bottom", "auto-start", "auto-end", "left-start", "left-end", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end"],
      control: { type: 'select' }
    },
    strategy: {
      options: ['absolute', 'fixed'],
      control: {type: 'select'}
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', 'auto'],
      control: { type: 'select' }
    },
    variant: {
      options: ['dark', 'light'],
      control: {type: 'select'}
    },
    zIndex: {
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      control: {type: 'select'}
    }
  }
};

const Template = (args) => ({
  components: { SdsTooltip },
  setup() {
    return { args }
  },
  template: `
    <div class="p-48">
      <sds-tooltip v-model="localValue" v-bind="args" @open="onOpen" @close="onClose" @before-open="onBeforeOpen" @before-close="onBeforeClose">
        <template #trigger>
          <button class="btn btn-default" @click="onClick">I have a tooltip</button>
        </template>
        <p>Lorem ipsum dolor.</p>
      </sds-tooltip>
    </div>
  `,
  data() {
    return { localValue: this.$props.modelValue }
  },
  watch: {
    modelValue(value) {
      this.localValue = value
    }
  },
  methods: {
    onOpen: action('open'),
    onClose: action('close'),
    onBeforeOpen: action('before-open'),
    onBeforeClose: action('before-close'),
    onClick: action('onClick')
  }
});

export const Default = Template.bind({});
Default.args = {};
