const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  const components = {
    ".scroll-area": {
      "@apply overflow-auto": {},
    },

    ".scroll-area-x": {
      "@apply overflow-x-auto": {},
    },

    ".scroll-area-y": {
      "@apply overflow-y-auto": {},
    },

    ".scroll-area, .scroll-area-x, .scroll-area-y": {
      paddingRight: "8px",

      "&:hover": {
        paddingRight: "5px",
      },

      "&::-webkit-scrollbar": {
        width: "6px"
      },

      "&:hover::-webkit-scrollbar": {
        width: "9px",
      },

      "&::-webkit-scrollbar-track": {
        "@apply bg-gray-200 dark:bg-gray-800 rounded": {},
      },

      "&::-webkit-scrollbar-thumb": {
        "@apply bg-gray-400 dark:bg-gray-600 rounded": {},
      },

      "&:hover::-webkit-scrollbar-thumb": {
        "@apply bg-gray-500": {},
      }
    },
  };

  addComponents(components);
});
