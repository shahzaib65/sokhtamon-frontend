/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        deep_orange: { 100: "#fac5ac", A100: "#daab7a" },
        white: { A700_1e: "#ffffff1e", A700: "#ffffff" },
        blue_gray: {
          100: "#cfcfcf",
          300: "#94a3b8",
          400: "#8d8d8d",
          500: "#64748b",
          600: "#596780",
          900: "#333333",
          "100_01": "#cbd5e1",
          "100_7f": "#cbd5e17f",
          "300_03": "#90a3bf",
          "300_01": "#8e8ea9",
          "300_02": "#9797aa",
          "400_01": "#838996",
        },
        indigo: { 900: "#0e355f", A200: "#5271ff" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_1e": "#0000001e",
          "900_07": "#00000007",
          "900_26": "#00000026",
        },
        light_blue: { 900: "#00579f" },
        gray: {
          100: "#f7f7f7",
          200: "#ececec",
          400: "#bebebe",
          500: "#a6a6a6",
          600: "#838383",
          700: "#565656",
          800: "#3a3a3a",
          900: "#121a26",
          "50_21": "#fff8f821",
          "500_01": "#abacac",
          "900_02": "#1e1f1e",
          "900_03": "#1a202c",
          "900_04": "#2a2a2a",
          "900_01": "#011c2a",
          "100_01": "#f1f5f9",
          "700_01": "#5b5b5b",
        },
        yellow: { 800: "#f4932d", "800_02": "#f79e1b", "800_01": "#faa61a" },
        red: { A700: "#eb001b" },
        orange: { A200: "#fbad39", A700: "#ff5f00" },
        blue: { 700: "#306fc8" },
      },
      fontFamily: { roboto: "Roboto" },
      boxShadow: {
        bs3: "0px 0px  4px 0px #0000003f",
        bs1: "0px 0px  14px 0px #0000001e",
        bs2: "0px 2px  2px 0px #00000026",
        bs: "0px 0px  60px 30px #00000007",
      },
    },
  },
  plugins: [
     require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/forms"),
  ],
};








