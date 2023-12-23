/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-nav-bg": "#E8ECEF",
        "color-black-1": "#333333",
      },
    },
  },
  plugins: [],
});
