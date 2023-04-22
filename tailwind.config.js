/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        b1: "#E9EDC9",
        b2: "#CCD5AE",
        b3: "#FEFAE0",
        b4: "#FAEDCD",
        b5: "#264653",
        b6: "#2a9d8f",
        dark: "#16161a",
        purple: "#6246ea",
        soft: "#fffffe",
        default: "#94a1b2",
        green: "#2cb67d",
      },
    },
  },
  plugins: [],
};
