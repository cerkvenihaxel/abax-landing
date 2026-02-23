import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'alice-blue': '#D9E4F0',
        'glaucous': '#5178A7',
        'baltic-blue': '#275891',
        'platinum': '#F6F9FB',
        'baltic-blue-2': '#356092',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#275891",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#5178A7",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#D9E4F0",
          foreground: "#275891",
        },
        accent: {
          DEFAULT: "#356092",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      maxWidth: {
        '6xl': '72rem',
        '7xl': '80rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config 