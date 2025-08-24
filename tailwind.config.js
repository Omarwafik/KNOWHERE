/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grad1: "#bb4300",
        grad2: "#e77600",
        primary: "#d85b00",
        secondary: "#ff8f00",
        hover: "#c06216",
        light: "#e4e2dd",
        ko7ly: "06327d",
        akhdar: "209d5c",
      },
      fontFamily: {
        // font-family: "", serif;
        // font-family: "Young Serif", serif;
        title: ["Shrikhand", "cursive"],
        paragraph: ["Young Serif", "serif"],
      },
    },
  },
  plugins: [],
};
