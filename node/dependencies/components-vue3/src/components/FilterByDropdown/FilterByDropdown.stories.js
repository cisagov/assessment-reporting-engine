import SdsFilterByDropdown from './FilterByDropdown.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons/Dropdowns/Filter by Dropdown',
  parameters: {
    docs: {
      description: {
        component: 'A modal is an overlay component displayed on top of the page content to help focus users\' attention to a single task or message.',
      },
    },
  },
  component: SdsFilterByDropdown,
  argTypes: {
    placement: {
      options: ["auto", "left", "top", "right", "bottom", "auto-start", "auto-end", "left-start", "left-end", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end"],
      control: {type: 'select'}
    },
    variant: {
      options: ['', 'primary', 'secondary'],
      control: { type: 'select' }
    },
    zIndex: {
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      control: {type: 'select'}
    }
  }
};

const Template = (args) => ({
  components: { SdsFilterByDropdown },
  setup() {
    return { args }
  },
  template: `
    <div style="height: 28rem">
      <sds-filter-by-dropdown
        v-model="localValue"
        v-bind="args"
        @input="onInput"
      />
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
    onInput: action('input')
  }
});

export const Default = Template.bind({});
Default.args = {
  modelValue: [
    { id: 1, text: "Option 1", selected: false },
    { id: 2, text: "Option 2", selected: false },
    { id: 3, text: "Option 3", selected: false },
    { id: 4, text: "Option 4", selected: false },
    { id: 5, text: "Option 5", selected: false },
    { id: 6, text: "Option 6", selected: false },
    { id: 7, text: "Option 7", selected: false },
    { id: 8, text: "Option 8", selected: false },
    { id: 9, text: "Option 9", selected: false },
    { id: 10, text: "Option 10", selected: false },
    { id: 11, text: "Option 11", selected: false },
    { id: 12, text: "Option 12", selected: false },
    { id: 13, text: "Option 13", selected: false },
    { id: 14, text: "Option 14", selected: false },
    { id: 15, text: "Option 15", selected: false },
    { id: 16, text: "Option 16", selected: false },
    { id: 17, text: "Option 17", selected: false },
    { id: 18, text: "Option 18", selected: false },
    { id: 19, text: "Option 19", selected: false },
    { id: 20, text: "Option 20", selected: false },
  ]
};

