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
        ko7ly: "#06327d",
        akhdar: "#209d5c",
        keyframes: {
          shine: {
            "0%": { "background-position": "100%" },
            "100%": { "background-position": "-100%" },
          },
        },
        animation: {
          shine: "shine 5s linear infinite",
        },
      },
      fontFamily: {
        title: ["Shrikhand", "cursive"],
        paragraph: ["Young Serif", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
