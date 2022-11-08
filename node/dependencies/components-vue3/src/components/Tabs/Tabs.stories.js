import SdsTabs from './Tabs.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Navigation/Tabs',
  parameters: {
    docs: {
      description: {
        component: 'Tabs provide navigation between sets of content on a page.',
      },
    },
  },
  component: SdsTabs,
  argTypes: {
    type: {
      options: ['folder', 'underline', 'block'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => ({
  components: { SdsTabs },
  setup() {
    return { args }
  },
  template: `
    <sds-tabs
      v-model="localValue"
      v-bind="args"
      @change="onChange"
      @update:model-value="onUpdateModelValue"
    >
      <template #tab(tab4)>
        Tab 4
      </template>
      <template #panel(tab1)>
        <div class="p-4">
          This is the content for tab 1.
        </div>
      </template>
      <template #panel(tab2)>
        <div class="p-4">
          This is the content for tab 2.
        </div>
      </template>
      <template #panel(tab3)>
        <div class="p-4">
          This is the content for tab 3.
        </div>
      </template>
      <template #panel(tab4)>
        <div class="p-4">
          This is the content for tab 4.
        </div>
      </template>
      <template #panel(tab5)>
        <div class="p-4">
          This is the content for tab 5.
        </div>
      </template>
    </sds-tabs>
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
    onChange: action('onChange'),
    onUpdateModelValue: action('onUpdateModelValue')
  }
});

export const Default = Template.bind({});
Default.args = {
  modelValue: [
    { key: 'tab1', title: 'Tab 1', disabled: true },
    { key: 'tab2', title: 'Tab 2', active: true },
    { key: 'tab3', title: 'Tab 3' },
    { key: 'tab4' },
    { key: 'tab5', title: 'Tab 5', href: '/internal-link' },
  ]
};

