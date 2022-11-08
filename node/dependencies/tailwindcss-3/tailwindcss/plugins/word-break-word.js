const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".word-break-word": {
      wordBreak: "break-word",
    }
  };

  addUtilities(newUtilities, ['responsive']);
});
