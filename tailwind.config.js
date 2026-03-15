/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0b1020',
          900: '#121a2e',
          800: '#1a2338',
        },
        mist: {
          50: '#f5f5f7',
          100: '#eceff3',
          200: '#d9dfe7',
          300: '#c7ccd5',
        },
        accent: {
          500: '#60a5fa',
          600: '#3b82f6',
          700: '#2563eb',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
        glow: '0 12px 40px rgba(59, 130, 246, 0.3)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.06)',
        'glass-hover': '0 16px 48px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
        glass: '24px',
        'glass-sm': '16px',
      },
      borderRadius: {
        glass: '1.5rem',
        'glass-lg': '2rem',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
