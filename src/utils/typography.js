import Typography from "typography";

const MOBILE_MEDIA_QUERY = "@media only screen and (max-width:575px)";
const TABLET_MEDIA_QUERY = "@media only screen and (max-width:992px)";

const options = {
  baseFontSize: "17px",
  baseLineHeight: 1.45,
  blockMarginBottom: 0,
  headerFontFamily: ["Roboto Slab", "sans-serif"],
  bodyFontFamily: ["Inter", "sans-serif"],
  scaleRatio: 2.15,
  overrideStyles: () => {
    return {
      body: { color: "#2b2b2b" },
      h1: { fontSize: "54px", lineHeight: "61px" },
      h2: { fontSize: "42px", lineHeight: "48px" },
      h3: { fontSize: "30px", lineHeight: "40px" },
      [TABLET_MEDIA_QUERY]: {
        // Make baseFontSize on tablet 17px.
        html: {
          fontSize: `${(20 / 18) * 100}%`,
        },
        h1: { fontSize: "34px", lineHeight: "36px" },
        h2: { fontSize: "30px", lineHeight: "30px" },
        h3: { fontSize: "28px", lineHeight: "28px" },
      },
      [MOBILE_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 16px.
        html: {
          fontSize: `${(18 / 18) * 100}%`,
        },
        h1: { fontSize: "32px", lineHeight: "32px" },
        h2: { fontSize: "28px", lineHeight: "28px" },
        h3: { fontSize: "26px", lineHeight: "26px" },
      },
    };
  },
};

const typography = new Typography(options);

typography.injectStyles();

export default typography;
