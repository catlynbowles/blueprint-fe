/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-blue": "#0D0221",
      "off-white": "#F5F5F5",
      indigo: "#2D54E8",
      black: "#091235",
      gray: "#D3D3D3",
      magenta: "#FF00FF",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    animation: {
      "fade-in": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  plugins: [],
};
