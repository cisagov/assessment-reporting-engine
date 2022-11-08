import SdsSelect from './Select.vue';

export default {
  title: 'Inputs/Selections/Select',
  parameters: {
    docs: {
      description: {
        component: 'A select is a form field that allows users to choose one option from a list.',
      },
    },
  },
  component: SdsSelect,
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => ({
  components: { SdsSelect },
  setup() {
    return { args }
  },
  template: `
    <sds-select v-model="localValue" v-bind="args" />
  `,
  data() {
    return { localValue: this.$props.modelValue }
  },
  watch: {
    modelValue(value) {
      this.localValue = value
    }
  },
});

export const Default = Template.bind({});
Default.args = {
  modelValue: 'option 1',
  options: [
    { id: 1, value: 'option 1', text: 'Option 1' },
    { id: 2, value: 'option 2', text: 'Option 2' },
    { id: 3, value: 'option 3', text: 'Option 3' },
  ]
};

