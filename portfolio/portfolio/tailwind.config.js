/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    // Desktop layout at every width: below 1100px the whole UI is scaled down via the
    // root font-size (see globals.css) instead of collapsing into a different mobile layout.
    screens: { sm: "0px", md: "0px", lg: "0px", xl: "1280px" },
    extend: {
      colors: {
        // Colours read CSS variables so the menu's colour-variant toggle can swap the palette.
        indigo: { DEFAULT: "rgb(var(--c-indigo) / <alpha-value>)", light: "rgb(var(--c-indigo-light) / <alpha-value>)" },
        orange: { DEFAULT: "rgb(var(--c-orange) / <alpha-value>)", light: "rgb(var(--c-orange-light) / <alpha-value>)" },
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        tint: "rgb(var(--c-tint) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
