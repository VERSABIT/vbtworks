/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {}, borderWidth: {
      '32': '32px', '100': '100px'
    }, colors: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'success': '#38c172',
      'info': '#3490dc',
      'warning': '#ffed4a',
      'light': '#f8f9fa',
      'dark': '#343a40',
      'white': '#ffffff',
      'black': '#000000',
      'regular': '#E8F7FF',
      'btn-primary': '#0162DA',
      'btn-secondary': '#FFC107',
      'icon-primary': '#CBD5E1',
      'icon-marketing': '#0063db',
      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
        900: '#161e2e',
      },
      main: {
        'empower': '0f172a'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
