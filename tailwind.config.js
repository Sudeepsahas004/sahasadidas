// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a", // example dark color
      }
    }
  },
  plugins: [],
};
