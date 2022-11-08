import SdsLayoutStacked from './LayoutStacked.vue';

export default {
  title: 'Layouts/Layout Stacked',
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 250,
      description: {
        component: 'A simple layout that automatically adjusts to the size of the viewport.',
      },
    },
  },
  component: SdsLayoutStacked,
  argTypes: {}
};

const Template = (args) => ({
  components: { SdsLayoutStacked },
  setup() {
    return { args }
  },
  template: `
    <sds-layout-stacked v-bind="args">
      <template #header>
        <div class="border border-dashed">
          Header area
        </div>
      </template>
      <div class="border border-dashed">
        Page area
      </div>
      <template #footer>
        <div class="border border-dashed">
          Footer area
        </div>
      </template>
    </sds-layout-stacked>
  `
});

export const Default = Template.bind({});
Default.args = {};

