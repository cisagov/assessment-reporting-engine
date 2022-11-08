import SdsSearchBox from './SearchBox.vue';

export default {
  title: 'Inputs/Search Box',
  parameters: {
    docs: {
      description: {
        component: 'A search box is a text field allows users to type in search terms and execute it by clicking the magnifying glass icon.',
      },
    },
  },
  component: SdsSearchBox,
  argTypes: {
    variant: {
      options: ['default', 'primary', 'danger'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => ({
  components: { SdsSearchBox },
  setup() {
    return { args }
  },
  template: `
    <sds-search-box v-model="localValue" v-bind="args" />
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
Default.args = {};

