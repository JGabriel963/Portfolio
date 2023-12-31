/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const Myclass = plugin(function({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)"
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d"
    },
    ".perspective": {
      perspective: "1000px"
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    }
  })
})



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
      'secondary-color': '#FFD3B1',
      'tertiary-color': '#323150',
      'background': '#F0EFF5',
      'gray': '#AFADB7',
      'gray-2': "#737275",
      'blur': '#1A8DEB',
      'blur-2': '#2B7EEA',
      'yellow': '#E3EB02',
      'red-2': '#b6100b',
      'red-5': '#fe432f',
      'red-3': '#fe7b5b',
      'red-4': '#ffb488'
    },
    fontFamily: {
      'poppins': 'Poppins',
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    Myclass
  ],
}

