/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        octosquares: ['"TT Octosquares Trl Cnd"', 'sans-serif'],
        inter: ['"Inter Tight"', 'sans-serif'],
        mono: ['"Inter Tight"', 'monospace'],
      },
      colors: {
        landing: {
          surface: 'rgba(255,255,255,0.10)',
          'surface-hover': 'rgba(255,255,255,0.16)',
        },
        border: 'rgba(255,255,255,0.10)',
        foreground: 'hsl(0 0% 100%)',
        background: '#000000',
        gold: {
          DEFAULT: '#F3AF42',
          dark: '#C68C2F',
        },
        dark: '#080808',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
