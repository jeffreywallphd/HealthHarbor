/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f0f2f7",
        black: "#000",
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero":
          "#fff",
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark":
          "#212529",
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee":
          "#878a99",
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white":
          "#f9fbfc",
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain":
          "#e9ebec",
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-niagara":
          "#0ab39c",
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-abbey":
          "#495057",
        red: "rgba(221, 9, 9, 0.14)",
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay":
          "#405189",
        seagreen: {
          "100": "#0b7933",
          "200": "rgba(11, 121, 51, 0.26)",
        },
        steelblue: "rgba(0, 142, 205, 0.24)",
        tomato: "#f06548",
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-whisper":
          "#f3f3f9",
        midnightblue: "#0e2872",
        mediumseagreen: "#30a159",
        gainsboro: "#d9d9d9",
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1":
          "#f3f6f9",
        goldenrod: "#f7b84b",
        lightsteelblue: "#afcaeb",
        orange: "rgba(255, 167, 0, 0.21)",
      },
      spacing: {},
      fontFamily: {
        "themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12":
          "Poppins",
        raleway: "Raleway",
        abeezee: "ABeeZee",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      smi: "13px",
      xs: "12px",
      "2xs": "11px",
      "base-3": "16.3px",
      "3xl": "22px",
      lg: "18px",
      sm: "14px",
      base: "16px",
      lgi: "19px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
