const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, theme }) {
  const components = {
    /**
     * Base nav class
     */

    ".nav": {
      "@apply select-none whitespace-nowrap flex items-center text-gray-600 text-sm py-3 px-4 w-full font-semibold": {},
      "--nav-variant": theme("colors.gray.200"),
      "--nav-on-variant": theme("colors.gray.900"),
      ".dark &": {
        "@apply text-gray-400": {},
      },
      ".dark &:not([class*=nav-])": {
        "@apply text-gray-400": {},
        "--nav-variant": theme("colors.gray.800"),
        "--nav-on-variant": theme("colors.gray.100"),
      },
    },

    /**
     * Color variants
     */

    ".nav-light": {
      "@apply text-gray-700": {},
      "--nav-variant": theme("colors.gray.200"),
      "--nav-on-variant": theme("colors.gray.900"),

      ".dark &": {
        "@apply text-gray-700": {},
        "--nav-variant": theme("colors.gray.100"),
        "--nav-on-variant": theme("colors.gray.900"),
      },
    },

    ".nav-dark": {
      "@apply text-gray-300": {},
      "--nav-variant": theme("colors.gray.800"),
      "--nav-on-variant": theme("colors.gray.100"),

      ".dark &": {
        "@apply text-gray-300": {},
        "--nav-variant": theme("colors.gray.700"),
        "--nav-on-variant": theme("colors.gray.100"),
      },
    },

    ".nav-white": {
      "--nav-variant": theme("colors.white"),
      "--nav-on-variant": theme("colors.gray.900"),
    },

    ".nav-black": {
      "--nav-variant": theme("colors.black"),
      "--nav-on-variant": theme("colors.gray.100"),
    },

    ".nav-blue, .nav-primary": {
      "--nav-variant": theme("colors.blue.500"),
      "--nav-on-variant": theme("colors.white"),
      ".dark &": {
        "--nav-variant": theme("colors.blue.400"),
      }
    },

    ".nav-green, .nav-success": {
      "--nav-variant": theme("colors.green.500"),
      "--nav-on-variant": theme("colors.white"),
      ".dark &": {
        "--nav-variant": theme("colors.green.400"),
      }
    },

    ".nav-indigo": {
      "--nav-variant": theme("colors.indigo.500"),
      "--nav-on-variant": theme("colors.white"),
      ".dark &": {
        "--nav-variant": theme("colors.indigo.400"),
      }
    },

    ".nav-orange, .nav-warning": {
      "--nav-variant": theme("colors.orange.500"),
      "--nav-on-variant": theme("colors.black"),
      ".dark &": {
        "--nav-variant": theme("colors.orange.400"),
      }
    },

    ".nav-pink": {
      "--nav-variant": theme("colors.pink.500"),
      "--nav-on-variant": theme("colors.white"),
      ".dark &": {
        "--nav-variant": theme("colors.pink.400"),
      }
    },

    ".nav-purple": {
      "--nav-variant": theme("colors.purple.500"),
      "--nav-on-variant": theme("colors.white"),
      ".dark &": {
        "--nav-variant": theme("colors.purple.400"),
      }
    },

    ".nav-red, .nav-danger": {
      "--nav-variant": theme("colors.red.500"),
      "--nav-on-variant": theme("colors.white"),
      ".dark &": {
        "--nav-variant": theme("colors.red.400"),
      }
    },

    ".nav-teal, .nav-info": {
      "--nav-variant": theme("colors.teal.500"),
      "--nav-on-variant": theme("colors.white"),
      ".dark &": {
        "--nav-variant": theme("colors.teal.400"),
      }
    },

    ".nav-yellow": {
      "--nav-variant": theme("colors.yellow.500"),
      "--nav-on-variant": theme("colors.black"),
      ".dark &": {
        "--nav-variant": theme("colors.yellow.400"),
      }
    },

    /**
     * Core styles
     */

    ".nav:hover, .nav:active": {
      color: "var(--nav-variant)",
    },

    ".nav:active": {
      "filter": "brightness(90%)",
    },

    ".nav.active": {
      color: "var(--nav-variant)",
    },

    ".nav.disabled, .nav[disabled]": {
      "@apply opacity-50 pointer-events-none": {},
    },

    ".nav:not([class*=nav-]):hover, .nav:not([class*=nav-]):active": {
      "@apply text-gray-900": {},
      ".dark &": {
        "@apply text-gray-100": {},
      },
    },

    ".nav:not([class*=nav-]).active": {
      "@apply text-gray-900": {},
      ".dark &": {
        "@apply text-gray-100": {},
      },
    },

    /**
     * Types
     */

    /* Underline type */

    ".nav-underline": {
      "@apply pt-3 pb-2 border-b-4 border-transparent rounded-none": {},
      color: "var(--nav-variant)",
      ".dark &": {
        color: "var(--nav-variant)",
      }
    },

    ".nav-underline:hover, .nav-underline:active": {
      "@apply text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100": {},
    },

    ".nav-underline.active": {
      "@apply text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100": {},
    },

    /* Overline type */

    ".nav-overline": {
      "@apply pt-2 pb-3 border-t-4 border-transparent rounded-none": {},
      color: "var(--nav-variant)",
      ".dark &": {
        color: "var(--nav-variant)",
      }
    },

    ".nav-overline:hover, .nav-overline:active": {
      "@apply text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100": {},
    },

    ".nav-overline.active": {
      "@apply text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100": {},
    },

    /* Pill type */

    ".nav-pill:hover, .nav-pill:active": {
      "@apply rounded": {},
      color: "var(--nav-on-variant)",
      backgroundColor: "var(--nav-variant)",
    },

    ".nav-pill.active": {
      "@apply rounded": {},
      color: "var(--nav-on-variant)",
      backgroundColor: "var(--nav-variant)",
    },

    /* Block type */

    ".nav-block:hover, .nav-block:active": {
      "@apply rounded-none": {},
      color: "var(--nav-on-variant)",
      backgroundColor: "var(--nav-variant)",
    },

    ".nav-block.active": {
      "@apply rounded-none": {},
      color: "var(--nav-on-variant)",
      backgroundColor: "var(--nav-variant)",
    },

    /**
     * Nav groups
     */

    ".nav-group": {
      "@apply grid grid-flow-col": {},
      gridAutoColumns: "min-content",
    },
  };

  addComponents(components);
});
