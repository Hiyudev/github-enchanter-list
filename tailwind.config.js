const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: colors.pink,
        secondary: colors.purple,
        background: colors.zinc,
      },
    },
  },
  plugins: [],
};
