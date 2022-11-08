const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  const components = {
    ".input-group-text": {
      "@apply flex items-center text-center whitespace-nowrap py-2 px-4 border border-gray-500 border-opacity-50 rounded bg-gray-100 dark:bg-gray-700": {},
    },

    ".btn-group, .input-group": {
      "@apply flex": {},

      ".form-control:not(:first-child):not(:last-child), .btn:not(:first-child):not(:last-child), .input-group-text:not(:first-child):not(:last-child)": {
        "@apply rounded-none": {},
      },

      ".form-control:not(:first-child), .btn:not(:first-child), .input-group-text:not(:first-child)": {
        "@apply -ml-px": {},
      },

      "&.btn-group-sm .form-control, &.btn-group-sm .btn, &.btn-group-sm .input-group-text, &.input-group-sm .form-control, &.input-group-sm .btn, &.input-group-sm .input-group-text": {
        "@apply py-1 px-2 text-sm": {},
      },

      "&.btn-group-sm select:not([multiple]).form-control, &.input-group-sm select:not([multiple]).form-control": {
        "@apply pr-5 bg-right": {},
      },

      ".form-control:first-child:not(:only-child), .btn:first-child:not(:only-child), .input-group-text:first-child:not(:only-child)": {
        "@apply rounded-r-none": {},
      },

      ".form-control:last-child:not(:only-child), .btn:last-child:not(:only-child), .input-group-text:last-child:not(:only-child)": {
        "@apply rounded-l-none": {},
      },
    },

    ".btn-toolbar, .input-toolbar": {
      "@apply flex flex-wrap justify-start": {},
    },
  };

  addComponents(components);
});
