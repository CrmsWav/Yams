/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#28AE33",
        secondary: "#0D6114",
        tertiary: "#F9FF40",
        quaternary: "",
        quinary: "",
      },
    },
  },
  plugins: [],
}
