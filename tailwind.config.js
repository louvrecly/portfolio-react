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
        surface: {
          DEFAULT: 'hsl(var(--color-surface))',
          raised: 'hsl(var(--color-surface-raised))',
          overlay: 'hsl(var(--color-surface-overlay))',
        },
        'on-surface': {
          DEFAULT: 'hsl(var(--color-on-surface))',
          raised: 'hsl(var(--color-on-surface-raised))',
        },
        highlight: 'hsl(var(--color-highlight))',
        cool: {
          from: 'hsl(var(--color-cool-from))',
          to: 'hsl(var(--color-cool-to))',
        },
        warm: {
          from: 'hsl(var(--color-warm-from))',
          to: 'hsl(var(--color-warm-to))',
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
