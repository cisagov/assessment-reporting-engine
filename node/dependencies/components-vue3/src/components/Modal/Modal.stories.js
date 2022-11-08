import SdsModal from './Modal.vue';

export default {
  title: 'Containers/Modal',
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 300,
      description: {
        component: 'A modal is an overlay component displayed on top of the page content to help focus users\' attention to a single task or message.',
      },
    },
  },
  component: SdsModal,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' }
    },
    zIndex: {
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      control: {type: 'select'}
    }
  }
};

const Template = (args) => ({
  components: { SdsModal },
  setup() {
    return { args }
  },
  template: `
    <div>
      <p class="mb-4">Use the button below to toggle the modal.</p>
      <button class="btn btn-primary" @click="localValue = !localValue">Toggle Modal</button>
      <sds-modal v-model="localValue" v-bind="args">
        <template #title>
          Modal title
        </template>
        <p>Modal copy goes here</p>
        <template #footer>
          Modal footer
        </template>
      </sds-modal>
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
};

