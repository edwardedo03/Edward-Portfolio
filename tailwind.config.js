/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffbe0c",
        secondary: "#2a2312",
      },
    },
  },
  plugins: [],
};
