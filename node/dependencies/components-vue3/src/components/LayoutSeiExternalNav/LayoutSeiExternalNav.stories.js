import SdsLayoutSeiExternalNav from './LayoutSeiExternalNav.vue';

export default {
  title: 'Layouts/Layout SEI External/Layout SEI External Nav',
  parameters: {
    docs: {
      description: {
        component: 'The nav for the LayoutSeiExternal layout.',
      },
    },
  },
  component: SdsLayoutSeiExternalNav,
  argTypes: {}
};

const Template = (args) => ({
  components: { SdsLayoutSeiExternalNav },
  setup() {
    return { args }
  },
  template: `
    <sds-layout-sei-external-nav v-bind="args"></sds-layout-sei-external-nav>
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

