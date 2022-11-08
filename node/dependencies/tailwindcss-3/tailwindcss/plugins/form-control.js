const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  const components = {
    ".form-control": {
      "@apply min-w-0 border-gray-500 shadow-inner text-gray-900 bg-white bg-opacity-75 border-opacity-75 rounded w-full focus:ring-2 focus:ring-blue-300 dark:text-gray-100 dark:bg-opacity-10 dark:focus:ring-blue-700": {},

      "&.form-control-sm": {
        "@apply py-1 px-2 text-sm": {},
      },

      "&::placeholder": {
        "@apply italic": {},
      },

      "&[readonly], &:disabled": {
        "@apply opacity-50 pointer-events-none": {},
      },

      "&.valid": {
        "@apply border-success": {}
      },

      "&.invalid": {
        "@apply border-danger": {}
      }
    },

    "select:not([multiple]).form-control option": {
      "@apply text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-700": {},
    },

    "select:not([multiple]).form-control-sm": {
      "@apply pr-5 bg-right": {},
    },
  };

  addComponents(components);
});
