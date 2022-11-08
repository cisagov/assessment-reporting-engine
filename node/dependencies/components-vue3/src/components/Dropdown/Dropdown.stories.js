import SdsDropdown from './Dropdown.vue';
import SdsDropdownHeader from '../DropdownHeader';
import SdsDropdownDivider from '../DropdownDivider';
import SdsDropdownItem from '../DropdownItem';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons/Dropdowns/Dropdown/Dropdown',
  parameters: {
    docs: {
      description: {
        component: 'A dropdown displays a list of options in a temporary modal menu so that users can make a selection and complete a task such as downloading or exporting.',
      },
    },
  },
  component: SdsDropdown,
  argTypes: {
    placement: {
      options: ["auto", "left", "top", "right", "bottom", "auto-start", "auto-end", "left-start", "left-end", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end"],
      control: {type: 'select'}
    },
    strategy: {
      options: ['absolute', 'fixed'],
      control: {type: 'select'}
    },
    variant: {
      options: ['default', 'primary', 'success', 'danger', 'light'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md'],
      control: {type: 'select'}
    },
    zIndex: {
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      control: {type: 'select'}
    }
  }
};

const Template = (args) => ({
  components: { SdsDropdown, SdsDropdownItem, SdsDropdownHeader, SdsDropdownDivider },
  setup() {
    return { args }
  },
  template: `
  <div style="height: 28rem">
    <sds-dropdown
      v-bind="args"
      v-model="localValue"
      @update:model-value="onUpdateModelValue"
      @btn-click="onBtnClick"
    >
      <template #title>Dropdown</template>
      <sds-dropdown-header>Dropdown header</sds-dropdown-header>
      <sds-dropdown-item tag="button" @click="onClick">Item 1</sds-dropdown-item>
      <sds-dropdown-item tag="button" @click="onClick">Item 2</sds-dropdown-item>
      <sds-dropdown-item tag="button" @click="onClick">Item 3</sds-dropdown-item>
      <sds-dropdown-divider />
      <sds-dropdown-header>Dropdown header 2</sds-dropdown-header>
      <sds-dropdown-item tag="button" @click="onClick">Item 4</sds-dropdown-item>
      <sds-dropdown-item tag="button" @click="onClick">Item 5</sds-dropdown-item>
    </sds-dropdown>
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
    onUpdateModelValue: action('update:model-value'),
    onBtnClick: action('btn-click'),
    onClick() {
      console.log('item clicked')
    }
  }
});

export const Default = Template.bind({});
Default.args = {
};