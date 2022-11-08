import SdsScrollspy from './Scrollspy.vue';

export default {
  title: 'Utility/Scrollspy',
  parameters: {
    docs: {
      description: {
        component: 'A scrollspy listens to page scrolling and trigger events based on the scroll position and allows users to smoothly navigate through different page sections.',
      },
    },
  },
  component: SdsScrollspy,
  argTypes: {}
};

const Template = (args) => ({
  components: { SdsScrollspy },
  setup() {
    return { args }
  },
  template: `
    <div>
      <sds-scrollspy v-bind="args" class="nav-group" />
      <div id="scrollspy-parent" class="scroll-area h-96 mb-4 border p-4">
        <p
          id="scrollspy-test"
          class="text-4xl text-success"
        >
          test 1
        </p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p
          id="scrollspy-test-2"
          class="text-4xl text-success"
        >
          test 2
        </p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p
          id="scrollspy-test-3"
          class="text-4xl text-success"
        >
          test 3
        </p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p
          id="scrollspy-test-4"
          class="text-4xl text-success"
        >
          test 4
        </p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p
          id="scrollspy-test-5"
          class="text-4xl text-success"
        >
          test 5
        </p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 'scrollspy-test', text: 'Test 1' },
    { id: 'scrollspy-test-2', text: 'Test 2' },
    { id: 'scrollspy-test-3', text: 'Test 3' },
    { id: 'scrollspy-test-4', text: 'Test 4' },
    { id: 'scrollspy-test-5', text: 'Test 5' }
  ],
  parent: "#scrollspy-parent",
  itemClass: "nav nav-primary nav-underline",
  activeClass: "active"
};

