import SdsScrollArea from './ScrollArea.vue';

export default {
  title: 'Utility/Scroll Area',
  parameters: {
    docs: {
      description: {
        component: 'A scroll area is a wrapper that provides a visible scroll bar and enables users to scroll through content that exceeds the size of the frame.',
      },
    },
  },
  component: SdsScrollArea,
  argTypes: {}
};

const Template = (args) => ({
  components: { SdsScrollArea },
  setup() {
    return { args }
  },
  template: `
    <sds-scroll-area v-bind="args" class="h-64 w-32">
      <div class="h-96">Sample text</div>
    </sds-scroll-area>
  `
});

export const Default = Template.bind({});
Default.args = {};

