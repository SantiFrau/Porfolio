/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "violeta-op":"rgba(148, 87, 235, 0.2)",
        "azul-op":"rgba(66, 133, 244, 0.2)",
        "verde-op":" rgba(0, 255, 0, 0.1)",
        "gris-op":"rgba(200, 200, 200, 0.2)",
      }
    },
  },
  plugins: [],
}

