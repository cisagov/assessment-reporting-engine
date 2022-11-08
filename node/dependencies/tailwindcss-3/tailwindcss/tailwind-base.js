const colors = require("./config/tailwindcss-colors");

module.exports = {
  // use tailwind's official dark mode
  darkMode: "class",
  // important set to true so the
  // @tailwindcss/typography plugin
  // can be overridden with utility
  // classes
  important: true,
  theme: {
    // sei design theme settings
    colors,
    extend: {
      fontFamily: require("./config/tailwindcss-font-family"),
      typography: require("./config/tailwindcss-typography"),
      spacing: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
        256: "64rem",
        288: "72rem",
        320: "80rem",
        384: "96rem",
      },
      colors: {
        primary: colors.blue[500],
        secondary: colors.gray[700],
        tertiary: colors.gray[500],
        success: colors.green[500],
        info: colors.teal[500],
        warning: colors.orange[500],
        danger: colors.red[500],
        light: colors.gray[100],
        dark: colors.gray[900],
      },
    },
  },
  safelist: [
    {
      pattern: /col-start-(1|2|3|4|5|6|7)/,
    },
  ],
  plugins: [
    // sei design system plugins
    require("./plugins/btn"),
    require("./plugins/form-control"),
    require("./plugins/input-group"),
    require("./plugins/link"),
    require("./plugins/nav"),
    require("./plugins/tab"),
    require("./plugins/table-prose"),
    require("./plugins/scroll-area"),
    require("./plugins/word-break-word"),
    // official tailwindcss plugins
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
