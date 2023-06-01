const colors = require('tailwindcss/colors');

module.exports = {
  content: ['src/**/*.{ts,tsx}', `${__dirname}/../ui/**/*.{ts,tsx}`],

  plugins: [],

  theme: {
    extend: {
      colors: {
        'brand-blue': colors.blue[500],
        'brand-green': colors.green[400],
        primary: {
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          50: '#f8fafc',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
};
