const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  const components = {
    ".link": {
      "@apply inline-block break-words no-underline": {},

      "&:hover": {
        "@apply underline": {},
      },

      "&.disabled, &[disabled]": {
        "@apply opacity-50 pointer-events-none": {},
      },
    },

    ".link-primary": {
      "@apply text-primary": {},

      "&:hover": {
        "@apply text-blue-700": {},
      },

      ".dark &": {
        "@apply text-blue-400": {},

        "&:hover": {
          "@apply text-blue-200": {},
        },
      },
    },

    ".link-secondary": {
      "@apply text-secondary": {},

      "&:hover": {
        "@apply text-primary": {},
      },

      ".dark &": {
        "@apply text-gray-300": {},

        "&:hover": {
          "@apply text-gray-100": {},
        },
      },
    },

    ".link-tertiary": {
      "@apply text-tertiary": {},

      "&:hover": {
        "@apply text-secondary": {},
      },

      ".dark &": {
        "@apply text-gray-400": {},

        "&:hover": {
          "@apply text-gray-300": {},
        },
      },
    },

    ".link-success": {
      "@apply text-success": {},

      "&:hover": {
        "@apply text-green-700": {},
      },

      ".dark &": {
        "@apply text-green-400": {},

        "&:hover": {
          "@apply text-green-200": {},
        },
      },
    },

    ".link-info": {
      "@apply text-info": {},

      "&:hover": {
        "@apply text-teal-700": {},
      },

      ".dark &": {
        "@apply text-teal-400": {},

        "&:hover": {
          "@apply text-teal-200": {},
        },
      },
    },

    ".link-warning": {
      "@apply text-warning": {},

      "&:hover": {
        "@apply text-orange-700": {},
      },

      ".dark &": {
        "@apply text-orange-400": {},

        "&:hover": {
          "@apply text-orange-200": {},
        },
      },
    },

    ".link-danger": {
      "@apply text-danger": {},

      "&:hover": {
        "@apply text-red-700": {},
      },

      ".dark &": {
        "@apply text-red-400": {},

        "&:hover": {
          "@apply text-red-200": {},
        },
      },
    },

    ".link-light": {
      "@apply text-light": {},

      "&:hover": {
        "@apply text-gray-300": {},
      },
    },

    ".link-dark": {
      "@apply text-dark": {},

      "&:hover": {
        "@apply text-gray-700": {},
      },
    },

    ".link-cta": {
      "@apply text-sm font-bold": {},

      "&:after": {
        "@apply inline-block text-lg leading-4 relative ml-1": {},
        content: '"\\00BB"',
      },

      "&:hover:after": {
        "@apply no-underline": {},
      },
    },
  };

  addComponents(components);
});
