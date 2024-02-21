
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily  : {
        sans  : ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "brandGray1"    : "#dadce0",
        "brandGray2"    : "#f8f9fa",
        "brandGray3"    : "#80868b",
        "brandBlue1"    : "#1967d2",
        "brandBlue2"    : "#4285f4",
        "brandGreen1"   : "#137333",
      },
      boxShadow : {
        blue	: "0 0 3px 3px #4285f4",
				gray	:	"0 1px 3px 0 rgba(60, 64, 67, .3)",
      },
    },
  },
  plugins: [],
}

