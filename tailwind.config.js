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
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        liyab: {
          primary: "#212121",
          secondary: "#241E20",
          accent: "#B11E0A",
          neutral: "#333c4d",
          "base-100": "#f3f4f6",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
