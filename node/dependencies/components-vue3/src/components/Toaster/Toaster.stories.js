import SdsToaster from './Toaster.vue';

export default {
  title: 'Feedback/Toaster',
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 250,
      description: {
        component: 'A toaster is a wrapper that triggers the toast component.',
      },
    },
  },
  component: SdsToaster,
  argTypes: {}
};

const Template = (args) => ({
  components: { SdsToaster },
  setup() {
    return { args }
  },
  template: `
    <div>
      <button class="btn btn-default" @click="addToast">Add Toast</button>
      <sds-toaster v-bind="args" v-model="localValue" />
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
    addToast() {
      const index = Math.floor(Math.random() * Math.floor(4));
      const toasts = [
        {
          id: Math.random(),
          title: "Success Toast",
          text: "This is the content of this toast.",
          variant: "success",
        },
        {
          id: Math.random(),
          title: "Info Toast",
          text: "This is the content of this toast.",
          variant: "info",
        },
        {
          id: Math.random(),
          title: "Warning Toast",
          text: "This is the content of this toast.",
          variant: "warning",
        },
        {
          id: Math.random(),
          title: "Danger Toast",
          text: "This is the content of this toast.",
          variant: "danger",
          noAutoHide: true,
        },
      ];
      if (!this.localValue) {
        this.localValue = []
      }
      this.localValue.unshift(toasts[index]);
    }
  }
});

export const Default = Template.bind({});
Default.args = {
};
