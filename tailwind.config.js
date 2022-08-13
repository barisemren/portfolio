/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xs: "335px",
        sm: "385px",
        md: "718px",
        lg: "954px",
        xl: "1340px",
      },
    },
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
      },
    },
  },
  plugins: [],
};
