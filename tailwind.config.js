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
      eggshell: "#CAF0F8",
      "pastel-green": "#C2E7D9",
      blue: "#0F084B",
      "baby-blue": "#26408B",
      "off-white": "#F5F5F5",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
