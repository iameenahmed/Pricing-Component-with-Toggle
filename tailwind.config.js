/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        VeryLightGrayishBlue: "hsl(240, 78%, 98%)",
        LightGrayishBlue: "hsl(234, 14%, 74%)",
        GrayishBlue: "hsl(233, 13%, 49%)",
        DarkGrayishBlue: "hsl(232, 13%, 33%)",
      },
      backgroundImage: {
        Gradient:
          "linear-gradient(120deg, hsl(236, 72%, 79%) 0%, hsl(237, 63%, 64%) 100%)",
      },
    },
  },
  plugins: [],
};
