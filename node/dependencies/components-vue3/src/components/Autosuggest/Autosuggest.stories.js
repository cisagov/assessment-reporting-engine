import SdsAutosuggest from './Autosuggest.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Inputs/Autosuggest',
  parameters: {
    docs: {
      description: {
        component: 'An autosuggest is a specialized search input field that presents users with a list of options based on history, context, or the first few typed letters.',
      },
    },
  },
  component: SdsAutosuggest,
  argTypes: {
    variant: {
      options: ['default', 'primary', 'danger'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => ({
  components: { SdsAutosuggest },
  setup() {
    return { args }
  },
  template: `
    <div style="height: 28rem">
      <sds-autosuggest
        v-model="localValue"
        v-bind="args"
        :items="itemList"
        :autosuggest="onAutosuggest"
        @input="onInput"
        @search="onSearch"
        @result="onResult"
      />
    </div>
  `,
  data () {
    return {
      itemList: [],
      fakeAjaxItems: [
        { term: "Apple", payload: "test" },
        {
          term:
            "Apple lksd kljsdflk jsdflk sdflkj sdflkj sdflk sdflkj sdflk sdflk sdflkj sdflkj sdflkj sdflkj sdflkj sdflksjd f",
          payload: "test",
        },
        { term: "Banana", payload: "test" },
        { term: "Orange", payload: "test" },
        { term: "Pineapple", payload: "test" },
        { term: "Kiwi", payload: "test" },
        { term: "Pomegranate", payload: "test" },
        { term: "Strawberry", payload: "test" },
        { term: "Raspberry", payload: "test" },
        { term: "Watermelon", payload: "test" },
        { term: "Mango", payload: "test" },
      ]
    }
  },
  data() {
    return { localValue: this.$props.modelValue }
  },
  watch: {
    modelValue(value) {
      this.localValue = value
    }
  },
  methods: {
    onInput: action('input'),
    onSearch: action('search'),
    onResult: action('result'),
    onAutosuggest() {
      setTimeout(() => {
        this.itemList = this.fakeAjaxItems.filter((i) => {
          return i.term.toLowerCase().includes(this.searchText.toLowerCase());
        });
      }, 250);
    }
  }
});

export const Default = Template.bind({});
Default.args = {};
