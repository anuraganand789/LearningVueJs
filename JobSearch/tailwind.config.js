
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily  : {
        sans  : ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      color : {
        "brandGray1"  : "#dadce0",
        "brandBlue1"  : "#1967d2",
        "brandGreen1"  : "#137333",
      },
    },
  },
  plugins: [],
}

