import SdsMultiselect from './Multiselect.vue';

export default {
  title: 'Inputs/Text fields/Multiselect',
  parameters: {
    docs: {
      description: {
        component: 'A multiselect is an advanced form field that allows users to search for and select one or more options or type in their own.',
      },
    },
  },
  component: SdsMultiselect,
  argTypes: {
    // size: {
    //   options: ['sm', 'md', 'lg', 'xl'],
    //   control: { type: 'select' }
    // }
  }
};

const Template = (args) => ({
  components: { SdsMultiselect },
  setup() {
    return { args }
  },
  template: `
    <div style="height: 28rem">
      <sds-multiselect v-model="localValue" v-bind="args" />
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
});

export const Default = Template.bind({});
Default.args = {
  selected: [
    { key: 1, value: 'Apple' },
  ],
  options: [
    { key: 1, value: 'Apple' },
    { key: 2, value: 'Banana' },
    { key: 3, value: 'Carrot' },
    { key: 4, value: 'Pineapple' },
    { key: 5, value: 'Kiwi' },
    { key: 6, value: 'Blueberry' },
    { key: 7, value: 'Strawberry' }
  ],
  showClear: true,
  multiple: true
};
