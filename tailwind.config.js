/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: "#111827",
        primaryDark: "#15041D",
        primaryLight: "#F5F5F5",
      },

      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        header: ["Rugen", "sans-serif"],
      },

      fontSize: {
        "2xl": [
          "2.5rem",
          {
            lineHeight: "2",
            fontWeight: "900",
          },
        ],
        xl: [
          "1.375rem",
          {
            lineHeight: "2.5",
            fontWeight: "900",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "2.5",
            fontWeight: "300",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.333",
            fontWeight: "400",
          },
        ],
        "2xs": [
          "0.625rem",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
