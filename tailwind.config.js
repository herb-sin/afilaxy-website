/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0091EA', dark: '#0064B7', light: '#00B0FF' },
        secondary: '#263238',
        surface: '#FFFFFF',
        muted: '#546E7A',
        accent: '#00B0FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1.5rem',
        pill: '50px',
      },
    },
  },
  plugins: [],
}
