/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px', // Se activará en pantallas de 1800px o más
        '4xl': '2000px', // Se activará en pantallas de 2000px o más
      }
    }
  },
  plugins: [],
}

