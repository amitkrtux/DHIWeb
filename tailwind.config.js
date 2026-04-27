/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['72', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#06070f',
          800: '#0a0d18',
          700: '#0f1225',
          600: '#1a1e35',
          500: '#242450',
          400: '#2e2e68',
        },
        accent: {
          50:  '#eef2ff',
          100: '#c7d5ff',
          200: '#a0b4ff',
          300: '#7bb3ff',
          400: '#4d7cff',
          500: '#1a5fff',
          600: '#1545d0',
          700: '#0f33a3',
          800: '#0a2278',
          900: '#051453',
        },
        neutral: {
          50:  '#f8f8fc',
          100: '#f0f0f8',
          200: '#e0e0ef',
          300: '#c8c8df',
          400: '#9fa8c7',
          500: '#6b74a0',
          600: '#4a5278',
          700: '#30365a',
          800: '#1a1e35',
          900: '#0f1225',
        },
      },
      boxShadow: {
        glow:         '0 0 20px rgba(26, 95, 255, 0.35)',
        'glow-sm':    '0 0 12px rgba(26, 95, 255, 0.2)',
        card:         '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern':    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in':    'fadeIn 0.5s ease-out',
        'slide-up':   'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(26, 95, 255, 0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(26, 95, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
