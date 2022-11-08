import SdsDropdownItem from './DropdownItem.vue';

export default {
  title: 'Buttons/Dropdowns/Dropdown/Dropdown Item',
  parameters: {
    docs: {
      description: {
        component: 'An item for use as a child to a dropdown.',
      },
    },
  },
  component: SdsDropdownItem,
  argTypes: {
    tag: {
      options: ['a', 'button'],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => ({
  components: { SdsDropdownItem },
  setup() {
    return { args }
  },
  template: `
    <sds-dropdown-item v-bind="args">
      Dropdown item
    </sds-dropdown-item>
  `
});

export const Default = Template.bind({});
Default.args = {};

