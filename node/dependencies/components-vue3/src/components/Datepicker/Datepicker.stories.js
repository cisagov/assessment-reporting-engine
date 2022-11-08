import SdsDatepicker from './Datepicker.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Date & Time/Datepicker',
  parameters: {
    docs: {
      description: {
        component: 'A date picker is a text input field that displays a calendar to allow users to select past, present, or future dates or times.',
      },
    },
  },
  component: SdsDatepicker,
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' }
    },
    mode: {
      options: ['date', 'dateTime', 'time'],
      control: { type: 'select' }
    },
    modelValue: { control: { type: 'date' } },
    min: { control: { type: 'date' } },
    max: { control: { type: 'date' } },
    zIndex: {
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      control: {type: 'select'}
    }
  }
};

const Template = (args) => ({
  components: { SdsDatepicker },
  setup() {
    return { args }
  },
  template: `
    <div class="py-96">
      <sds-datepicker
        v-model="localValue"
        v-model:min="parentMin"
        v-model:max="parentMax"
        v-bind="args"
        @input="onInput"
        @update:min="onUpdateMin"
        @update:max="onUpdateMax"
      />
    </div>
  `,
  data() {
    return {
      localValue: null,
      parentMin: null,
      parentMax: null
    }
  },
  watch: {
    modelValue(value) {
      this.localValue = value
    }
  },
  methods: {
    onInput: action('input'),
    onUpdateMin: action('update:min'),
    onUpdateMax: action('update:max'),
  }
});

export const Default = Template.bind({});
Default.args = {
  modelValue: new Date('02-06-2022'),
  min: new Date('02-03-2022'),
  max: new Date('03-18-2022')
};

export const Range = Template.bind({});
Range.args = {
  mode: 'dateTime',
  modelValue: { start: new Date('02-09-2022'), end: new Date('03-05-2022') },
  min: new Date('02-03-2022'),
  max: new Date('03-18-2022')
};