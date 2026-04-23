/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        // Dark mode palette
        dark: {
          900: '#0a0a0f',
          800: '#0f0f18',
          700: '#151522',
          600: '#1c1c2e',
          500: '#242438',
          400: '#2e2e48',
        },
        // Accent: muted teal/blue
        accent: {
          50:  '#e8f4f8',
          100: '#c3e3ef',
          200: '#90ccdf',
          300: '#55b0cc',
          400: '#2a96b8',
          500: '#1a7d9e',
          600: '#136480',
          700: '#0d4d62',
          800: '#083847',
          900: '#03232e',
        },
        // Neutral
        neutral: {
          50:  '#f8f8fc',
          100: '#f0f0f8',
          200: '#e0e0ef',
          300: '#c8c8df',
          400: '#a0a0bf',
          500: '#787899',
          600: '#565678',
          700: '#3c3c58',
          800: '#28283e',
          900: '#18182a',
        },
      },
      boxShadow: {
        glow:       '0 0 20px rgba(26, 125, 158, 0.3)',
        'glow-sm':  '0 0 12px rgba(26, 125, 158, 0.2)',
        card:       '0 4px 24px rgba(0,0,0,0.4)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(26, 125, 158, 0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(26, 125, 158, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
