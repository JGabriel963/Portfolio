/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'primary-color': '#fe0a03',
      'secondary-color': '#ffecb4',
      'blur': '#1A8DEB',
      'yellow': '#E3EB02',
      'red-2': '#fe432f',
      'red-3': '#fe7b5b',
      'red-4': '#ffb488'
    },
    fontFamily: {
      'poppins': 'Poppins',
    }
  },
  plugins: [],
}

