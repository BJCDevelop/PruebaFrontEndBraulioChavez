/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      colors: {
        primary: {
          100: '#E95867',
          200: '#E7283C',
          300: '#E2081E',
          400: '#C21527',
          500: '#8C131F',
        },
        secondary: {
          100: '#DAD6D3',
          200: '#C8C2BE',
          300: '#B5B0AD',
          400: '#9B928D',
          500: '#867D77',
          600: '#68605B',
        },
        neutral: {
          100: '#FBFBFB',
          200: '#EEEEEE',
          300: '#D3D3D3',
          400: '#929292',
          500: '#777777',
        },
        background: {
          100: '#FFFEFE',
          200: '#FCFCFC',
          300: '#222222',
        },
        success: {
          100: '#8EFFA7',
          200: '#5DDD79',
          300: '#25BF47',
          400: '#009721',
        },
        warning: {
          100: '#FFEF98',
          200: '#FFE55B',
          300: '#FFD910',
          400: '#EBC500',
        },
        danger: {
          100: '#FF958E',
          200: '#FF574D',
          300: '#FF271A',
          400: '#CC0C00',
        },
        text: {
          black: '#333333',
          white: '#FEFEFE',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
