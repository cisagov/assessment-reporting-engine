import SdsSection from './Section.vue';

export default {
  title: 'Containers/Section',
  parameters: {
    docs: {
      description: {
        component: 'A section is a simple container that houses related content and action buttons.',
      },
    },
  },
  component: SdsSection,
  argTypes: {
    type: {
      options: ['simple', 'raised', 'accented'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => ({
  components: { SdsSection },
  setup() {
    return { args }
  },
  template: `
    <sds-section v-bind="args">
      <template #title>Section title</template>
      <template #subtitle>Section subtitle</template>
      <template #nav>Section nav</template>
      Lorem ipsum dolor sit amet....
    </sds-section>
  `
});

export const Default = Template.bind({});
Default.args = {};

