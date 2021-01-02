module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    zIndex: {
      auto: 'auto',
      negative: '-1',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};
