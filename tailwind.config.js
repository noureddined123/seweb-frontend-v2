/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space_grotesk: ["var(--font-space_grotesk)"],
      },
      colors: {
        purple: "#120653",
        "dark-purple": "#141733",
        "light-purple": "#110450",
        dark: "#03051a",
        "dark-cafe": "#181818",
        black: "#0f0f0f",
        // black: "#04061b",
        rose: "#ff3838",
        blue: "#3e49f3",
        sky: "#f5f5f8",

        ash: "#999cbb",
        olive: "#8f8f8f",

        "light-gray": "#c9c4c4",

        gray: "#8f8e9a",
        "dim-gray": "#6a6a6a",
        "dark-gray": "#767676",

        "light-dark": "#1a1c34",
      },
      maxWidth: {
        container: "1170px",
      },
      spacing: {
        container: "0.938rem",
        section: "120px",
      },
      fontSize: {
        "8xl": ["90px", "90px"],
      },
      screens: {
        sm: "640px",

        md: "768px",

        tab: "900px",

        lg: "1100px",

        xl: "1280px",

        "2xl": "1536px",
      },
      backgroundImage: {
        "page-heading": "url('/others/heading-cover.webp')",
        "service-details-card": "url('/services/service-bg-card.png')",
        "service-details-effect": "url('/services/service-card-effect.png')",
        "team-bg": "url('/team/goal.png')",
      },
      boxShadow: {
        card: "0px 8px 44px 0px rgba(12, 12, 12, 0.06)",
        "card-2": "0px 8px 29px 0px rgba(0, 0, 0, 0.05)",
        "card-3": "0px 10px 26px 0px rgba(0, 0, 0, 0.09)",
      },
    },
  },
  plugins: [],
};
