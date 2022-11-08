const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, theme }) {
  const components = {
    /**
     * Base btn class
     */

    ".btn": {
      "@apply border inline-block py-2 px-4 rounded select-none whitespace-nowrap font-semibold": {},
      "--btn-variant": theme("colors.gray.500"),
      "--btn-variant-on": theme("colors.white"),
      borderColor: "var(--btn-variant)",
      backgroundColor: "var(--btn-variant)",
      color: "var(--btn-variant-on)",

      "&.btn-sm": {
        "@apply py-1 px-2 text-sm": {},
      },
    },

    /**
     * Color variants
     */

    ".btn-default": {
      "@apply border-gray-300": {},
      "--btn-variant": theme("colors.white"),
      "--btn-variant-on": theme("colors.blue.500"),

      ".dark &": {
        "@apply border-gray-500": {},
        "--btn-variant": theme("colors.gray.800"),
        "--btn-variant-on": theme("colors.blue.300"),
      },
    },

    ".btn-light": {
      "--btn-variant": theme("colors.gray.100"),
      "--btn-variant-on": theme("colors.gray.900"),

      ".dark &": {
        "--btn-variant": theme("colors.gray.100"),
        "--btn-variant-on": theme("colors.gray.900"),
      },
    },

    ".btn-dark": {
      "--btn-variant": theme("colors.gray.900"),
      "--btn-variant-on": theme("colors.gray.100"),

      ".dark &": {
        "--btn-variant": theme("colors.gray.900"),
        "--btn-variant-on": theme("colors.gray.100"),
      },
    },

    ".btn-white": {
      "--btn-variant": theme("colors.white"),
      "--btn-variant-on": theme("colors.gray.900"),
    },

    ".btn-black": {
      "--btn-variant": theme("colors.black"),
      "--btn-variant-on": theme("colors.gray.100"),
    },

    ".btn-blue, .btn-primary": {
      "--btn-variant": theme("colors.blue.500"),
      "--btn-variant-on": theme("colors.white"),
    },

    ".btn-green, .btn-success": {
      "--btn-variant": theme("colors.green.500"),
      "--btn-variant-on": theme("colors.white"),
    },

    ".btn-indigo": {
      "--btn-variant": theme("colors.indigo.500"),
      "--btn-variant-on": theme("colors.white"),
    },

    ".btn-orange, .btn-warning": {
      "--btn-variant": theme("colors.orange.500"),
      "--btn-variant-on": theme("colors.black"),
    },

    ".btn-pink": {
      "--btn-variant": theme("colors.pink.500"),
      "--btn-variant-on": theme("colors.white"),
    },

    ".btn-purple": {
      "--btn-variant": theme("colors.purple.500"),
      "--btn-variant-on": theme("colors.white"),
    },

    ".btn-red, .btn-danger": {
      "--btn-variant": theme("colors.red.500"),
      "--btn-variant-on": theme("colors.white"),
    },

    ".btn-teal, .btn-info": {
      "--btn-variant": theme("colors.teal.500"),
      "--btn-variant-on": theme("colors.white"),
    },

    ".btn-yellow": {
      "--btn-variant": theme("colors.yellow.500"),
      "--btn-variant-on": theme("colors.black"),
    },

    /**
     * Outline variant
     */

    ".btn-outline": {
      "@apply bg-transparent border-2": {},
      color: "var(--btn-variant)",

      "&:hover": {
        color: "var(--btn-variant-on)",
        backgroundColor: "var(--btn-variant)",
      },

      "&.btn-default": {
        "@apply text-blue-500": {},
        "&:hover": {
          "@apply bg-gray-100": {},
          ".dark &": {
            "@apply text-blue-400 bg-gray-700": {},
          },
        },
      },
    },

    /**
     * Block variant
     */

    ".btn-block": {
      "@apply block w-full": {},
    },

    /**
     * Action states
     */

    ".btn:hover": {
      "filter": "brightness(110%)",
    },

    ".btn-default:hover": {
      "@apply bg-gray-100": {},
      filter: "none",
      ".dark &": {
        "@apply bg-gray-700": {},
      },
    },

    ".btn.active, .btn:active": {
      "@apply shadow-inner": {},
      "filter": "brightness(90%)",
    },

    ".btn.disabled, .btn[disabled]": {
      "@apply opacity-50 pointer-events-none": {},
    },
  };

  addComponents(components);
});
