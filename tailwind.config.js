/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        medium: "Neue Montreal Medium",
        regular: "Neue Montreal Regular",
      },
      keyframes: {
        load: {
          "0%": { opacity: "0", transform: "translate(0, 10px)" },
          "100%": { opacity: "1", transform: "translate(0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
