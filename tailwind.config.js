/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#C2D9FF',
        'light-navy': '#8E8FFA',
        'mid-navy': '#7752FE',
        'navy': '#190482'
      },
      fontFamily: {
        robo: ['Roboto Slab']
      }
    },
  },
  plugins: [],
}

