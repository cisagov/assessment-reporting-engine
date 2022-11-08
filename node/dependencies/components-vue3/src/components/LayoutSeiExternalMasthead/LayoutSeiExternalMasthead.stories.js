import SdsLayoutSeiExternalMasthead from './LayoutSeiExternalMasthead.vue';

export default {
  title: 'Layouts/Layout SEI External/Layout SEI External Masthead',
  parameters: {
    docs: {
      description: {
        component: 'The masthead for the LayoutSeiExternal layout.',
      },
    },
  },
  component: SdsLayoutSeiExternalMasthead,
  argTypes: {}
};

const Template = (args) => ({
  components: { SdsLayoutSeiExternalMasthead },
  setup() {
    return { args }
  },
  template: `
    <sds-layout-sei-external-masthead v-bind="args"></sds-layout-sei-masthead>
  `
});

export const Default = Template.bind({});
Default.args = {
  page: {
    organization: 'Page Organization',
    title: 'Page Title',
    subtitle: 'Page Subtitle',
    description: 'Page Description',
    nav: [
      {
        title: 'Section 1',
        items: [
          { title: 'Link title 1', url: 'https://designsystem.sei.cmu.edu' },
          { title: 'Link title 2', url: 'https://designsystem.sei.cmu.edu' },
          { title: 'Link title 3', url: 'https://designsystem.sei.cmu.edu' },
          { title: 'Link title 4', url: 'https://designsystem.sei.cmu.edu' },
          { title: 'Link title 5', url: 'https://designsystem.sei.cmu.edu' },
        ],
        seeAll: {
          title: 'See All title',
          url: 'https://designsystem.sei.cmu.edu'
        }
      },
      {
        title: 'Section 2',
        items: [
          { title: 'Link title 1', url: 'https://designsystem.sei.cmu.edu' },
          { title: 'Link title 2', url: 'https://designsystem.sei.cmu.edu' },
        ]
      }
    ]
  }
};

