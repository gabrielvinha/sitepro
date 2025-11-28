/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#8A2BE2',
        },
        blue: {
          400: '#00BFFF',
        },
        background: '#0A0A14',
      },
      boxShadow: {
        glow: '0 0 15px 5px rgba(138, 43, 226, 0.5)',
        'glow-blue': '0 0 15px 5px rgba(0, 191, 255, 0.5)',
        'glow-sm': '0 0 10px 2px rgba(138, 43, 226, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee-normal': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};