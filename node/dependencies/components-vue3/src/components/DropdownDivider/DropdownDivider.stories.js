import SdsDropdownDivider from './DropdownDivider.vue';

export default {
  title: 'Buttons/Dropdowns/Dropdown/Dropdown Divider',
  parameters: {
    docs: {
      description: {
        component: 'A divider for use as a child to a dropdown.',
      },
    },
  },
  component: SdsDropdownDivider,
  argTypes: {
  }
};

const Template = (args) => ({
  components: { SdsDropdownDivider },
  setup() {
    return { args }
  },
  template: `
    <sds-dropdown-divider />
  `
});

export const Default = Template.bind({});
Default.args = {};
