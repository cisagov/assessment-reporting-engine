import SdsFileUploader from './FileUploader.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Inputs/File Uploader',
  parameters: {
    docs: {
      description: {
        component: 'A file uploader allows users to select one or more files to upload to a specific location.',
      },
    },
  },
  component: SdsFileUploader,
  argTypes: {
  }
};

const Template = (args) => ({
  components: { SdsFileUploader },
  setup() {
    return { args }
  },
  template: `
    <sds-file-uploader v-bind="args" @add="onAdd" @remove="onRemove" @remove-invalid="onRemoveInvalid" />
  `,
  methods: {
    onAdd: action('onAdd'),
    onRemove: action('onRemove'),
    onRemoveInvalid: action('onRemoveInvalid'),
  }
});

export const Default = Template.bind({});
Default.args = {
  accept: ".jpg, .jpeg, .png, .doc, .docx, .xls, .xlsx, .csv, .json",
  helperText: "Use a JSON, JPG, JPEG, PNG, DOC, DOCX, XLS, XLSX or CSV under 1MB.",
  allowedFiletypes: [
    'image/jpeg',
    'image/png',
    'text/csv',
    'application/json',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ],
  filesize: 1,
  multiple: true
};
