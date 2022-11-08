import SdsDropdownHeader from './DropdownHeader.vue';

export default {
  title: 'Buttons/Dropdowns/Dropdown/Dropdown Header',
  parameters: {
    docs: {
      description: {
        component: 'A divider for use as a child to a dropdown.',
      },
    },
  },
  component: SdsDropdownHeader,
  argTypes: {
  }
};

const Template = (args) => ({
  components: { SdsDropdownHeader },
  setup() {
    return { args }
  },
  template: `
    <sds-dropdown-header>
      Dropdown header
    </sds-dropdown-header>
  `
});

export const Default = Template.bind({});
Default.args = {};
