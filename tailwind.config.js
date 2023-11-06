/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-full': 'pulse-full 10s ease infinite',
        'pulse-full-alt': 'pulse-full-alt 10s ease infinite',
      },
      colors: {
        main: 'hsl(var(--color-main))',
        primary: 'hsl(var(--color-primary))',
        secondary: 'hsl(var(--color-secondary))',
        highlight: 'hsl(var(--color-highlight))',
        cool: {
          positive: 'hsl(var(--color-cool-positive))',
          negative: 'hsl(var(--color-cool-negative))',
        },
        warm: {
          positive: 'hsl(var(--color-warm-positive))',
          negative: 'hsl(var(--color-warm-negative))',
        },
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      keyframes: {
        'pulse-full': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'pulse-full-alt': {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  prefix: 'u-',
};
