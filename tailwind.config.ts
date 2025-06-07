import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midone': {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36aaf5',
          500: '#0c8ee4',
          600: '#0070c2',
          700: '#005a9e',
          800: '#004c83',
          900: '#00406d',
          950: '#00284a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      maxWidth: {
        '6xl': '72rem',
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}

export default config 