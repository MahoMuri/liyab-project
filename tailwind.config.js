/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        liyab: {
          black: "#212121",
          darker: "#241E20",
          "hot-red": "#B11E0A",
          "warm-yellow": "#F1BB64",
          "flammable-orange:": "#D6C8BD",
          white: "#F8F8F8",
        },
      },
    },
  },
  plugins: [],
};
