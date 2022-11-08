import SdsCalendar from './Calendar.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Date & Time/Calendar',
  parameters: {
    docs: {
      description: {
        component: 'A calendar displays a calendar grid to show users the full month or a range of two months.',
      },
    },
  },
  component: SdsCalendar,
  argTypes: {
    mode: {
      options: ['date', 'dateTime', 'time'],
      control: { type: 'select' }
    },
    min: { control: { type: 'date' } },
    max: { control: { type: 'date' } }
  }
};

const Template = (args) => ({
  components: { SdsCalendar },
  setup() {
    return { args }
  },
  template: `
    <sds-calendar v-bind="args" />
  `
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