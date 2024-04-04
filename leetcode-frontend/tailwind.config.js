module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {     
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '50%': { backgroundColor: theme('colors.gray.800') },
          '100%': { backgroundColor: theme('colors.gray.800') },
        },
      }),
    },
  },
  variants: {},
  plugins: [],
}