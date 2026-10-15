/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        piano: {
          950: '#050404',
          900: '#080706',
          850: '#0e0d0b',
          800: '#151310',
          750: '#1b1916',
          700: '#23201c',
        },
        gold: {
          50: '#faf6f0',
          100: '#f3ece0',
          200: '#e7d8be',
          300: '#dfc299',
          400: '#d4b386',
          500: '#c8a97e',
          600: '#b69263',
          700: '#8c714e',
          800: '#685237',
          900: '#483723',
        },
        ivory: {
          50: '#faf8f5',
          100: '#f5f2eb',
          200: '#eae4d7',
          300: '#d6d1c7',
          400: '#b0a99c',
          500: '#8f8a80',
          600: '#6a655c',
        }
      },
      fontFamily: {
        serif: ['"Bodoni Moda"', 'serif'],
        sans: ['"Hanken Grotesk"', 'sans-serif'],
        script: ['"Mrs Saint Delafield"', 'cursive'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'super-wide': '0.35em',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(200, 169, 126, 0.25)',
        'gold-glow-subtle': '0 0 25px -5px rgba(200, 169, 126, 0.12)',
        'piano-depth': '0 25px 60px -15px rgba(0, 0, 0, 0.85)',
      }
    },
  },
  plugins: [],
}
