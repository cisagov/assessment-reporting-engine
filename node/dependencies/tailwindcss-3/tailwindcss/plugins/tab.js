const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, theme }) {
  const components = {
    /**
     * Base tab class
     */

    ".tab": {
      "@apply select-none whitespace-nowrap flex items-center text-gray-600 text-sm py-3 px-4 w-full font-semibold": {},
      "--tab-variant": theme("colors.gray.200"),
      "--tab-on-variant": theme("colors.gray.900"),
      ".dark &": {
        "@apply text-gray-400": {},
      },
      ".dark &:not([class*=tab-])": {
        "@apply text-gray-400": {},
        "--tab-variant": theme("colors.gray.800"),
        "--tab-on-variant": theme("colors.gray.100"),
      },
    },

    /**
     * Color variants
     */

    ".tab-light": {
      "@apply text-gray-700": {},
      "--tab-variant": theme("colors.gray.200"),
      "--tab-on-variant": theme("colors.gray.900"),

      ".dark &": {
        "@apply text-gray-700": {},
        "--tab-variant": theme("colors.gray.100"),
        "--tab-on-variant": theme("colors.gray.900"),
      },
    },

    ".tab-dark": {
      "@apply text-gray-300": {},
      "--tab-variant": theme("colors.gray.800"),
      "--tab-on-variant": theme("colors.gray.100"),

      ".dark &": {
        "@apply text-gray-300": {},
        "--tab-variant": theme("colors.gray.700"),
        "--tab-on-variant": theme("colors.gray.100"),
      },
    },

    ".tab-white": {
      "--tab-variant": theme("colors.white"),
      "--tab-on-variant": theme("colors.gray.900"),
    },

    ".tab-black": {
      "--tab-variant": theme("colors.black"),
      "--tab-on-variant": theme("colors.gray.100"),
    },

    ".tab-blue, .tab-primary": {
      "--tab-variant": theme("colors.blue.500"),
      "--tab-on-variant": theme("colors.white"),
      ".dark &": {
        "--tab-variant": theme("colors.blue.400"),
      }
    },

    ".tab-green, .tab-success": {
      "--tab-variant": theme("colors.green.500"),
      "--tab-on-variant": theme("colors.white"),
      ".dark &": {
        "--tab-variant": theme("colors.green.400"),
      }
    },

    ".tab-indigo": {
      "--tab-variant": theme("colors.indigo.500"),
      "--tab-on-variant": theme("colors.white"),
      ".dark &": {
        "--tab-variant": theme("colors.indigo.400"),
      }
    },

    ".tab-orange, .tab-warning": {
      "--tab-variant": theme("colors.orange.500"),
      "--tab-on-variant": theme("colors.black"),
      ".dark &": {
        "--tab-variant": theme("colors.orange.400"),
      }
    },

    ".tab-pink": {
      "--tab-variant": theme("colors.pink.500"),
      "--tab-on-variant": theme("colors.white"),
      ".dark &": {
        "--tab-variant": theme("colors.pink.400"),
      }
    },

    ".tab-purple": {
      "--tab-variant": theme("colors.purple.500"),
      "--tab-on-variant": theme("colors.white"),
      ".dark &": {
        "--tab-variant": theme("colors.purple.400"),
      }
    },

    ".tab-red, .tab-danger": {
      "--tab-variant": theme("colors.red.500"),
      "--tab-on-variant": theme("colors.white"),
      ".dark &": {
        "--tab-variant": theme("colors.red.400"),
      }
    },

    ".tab-teal, .tab-info": {
      "--tab-variant": theme("colors.teal.500"),
      "--tab-on-variant": theme("colors.white"),
      ".dark &": {
        "--tab-variant": theme("colors.teal.400"),
      }
    },

    ".tab-yellow": {
      "--tab-variant": theme("colors.yellow.500"),
      "--tab-on-variant": theme("colors.black"),
      ".dark &": {
        "--tab-variant": theme("colors.yellow.400"),
      }
    },

    /**
     * Core styles
     */

    ".tab:hover, .tab:active": {
      color: "var(--tab-variant)",
    },

    ".tab:active": {
      "filter": "brightness(90%)",
    },

    ".tab.active": {
      color: "var(--tab-variant)",
    },

    ".tab.disabled, .tab[disabled]": {
      "@apply opacity-50 pointer-events-none": {},
    },

    ".tab:not([class*=tab-]):hover, .tab:not([class*=tab-]):active": {
      "@apply text-gray-900": {},
      ".dark &": {
        "@apply text-gray-100": {},
      },
    },

    ".tab:not([class*=tab-]).active": {
      "@apply text-gray-900": {},
      ".dark &": {
        "@apply text-gray-100": {},
      },
    },

    /**
     * Types
     */

    /* Underline type */

    ".tab-underline": {
      "@apply pt-3 pb-2 border-b-4 border-transparent rounded-none": {},
      color: "var(--tab-variant)",
      ".dark &": {
        color: "var(--tab-variant)",
      }
    },

    ".tab-underline:hover, .tab-underline:active": {
      "@apply text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100": {},
    },

    ".tab-underline.active": {
      "@apply text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100": {},
    },

    /* Overline type */

    ".tab-overline": {
      "@apply pt-2 pb-3 border-t-4 border-transparent rounded-none": {},
      color: "var(--tab-variant)",
      ".dark &": {
        color: "var(--tab-variant)",
      }
    },

    ".tab-overline:hover, .tab-overline:active": {
      "@apply text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100": {},
    },

    ".tab-overline.active": {
      "@apply text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100": {},
    },

    /* Pill type */

    ".tab-pill:hover, .tab-pill:active": {
      "@apply rounded": {},
      color: "var(--tab-on-variant)",
      backgroundColor: "var(--tab-variant)",
    },

    ".tab-pill.active": {
      "@apply rounded": {},
      color: "var(--tab-on-variant)",
      backgroundColor: "var(--tab-variant)",
    },

    /* Block type */

    ".tab-block:hover, .tab-block:active": {
      "@apply rounded-none": {},
      color: "var(--tab-on-variant)",
      backgroundColor: "var(--tab-variant)",
    },

    ".tab-block.active": {
      "@apply rounded-none": {},
      color: "var(--tab-on-variant)",
      backgroundColor: "var(--tab-variant)",
    },

    /**
     * tab groups
     */

    ".tab-group": {
      "@apply grid grid-flow-col": {},
      gridAutoColumns: "min-content",
    },
  };

  addComponents(components);
});
