/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables the dark mode toggle
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- This scans your React files for styles
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#10b981',
          400: '#34d399',
          500: '#10b981',
          900: '#064e3b',
        },
        ai: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
        },
        tech: {
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}