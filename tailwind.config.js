/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "at-light-green": "#44ba9f",
        "at-green": "#286d5d",
        "light-grey": "#f1f1f1",
      },
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
};
