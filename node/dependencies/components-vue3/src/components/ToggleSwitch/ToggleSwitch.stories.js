import SdsToggleSwitch from './ToggleSwitch.vue';

export default {
  title: 'Inputs/Toggle Switch',
  parameters: {
    docs: {
      description: {
        component: 'A toggle switch is a component that allows users to turn a system state on or off, which will trigger a change across the entire application.',
      },
    },
  },
  component: SdsToggleSwitch,
  argTypes: {
    variant: {
      options: ['primary', 'danger'],
      control: {type: 'select'}
    }
  }
};

const Template = (args) => ({
  components: {SdsToggleSwitch},
  setup() {
    return { args }
  },
  template: ` <sds-toggle-switch v-model="localValue" v-bind="args"/> `,
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
Default.args = {};

