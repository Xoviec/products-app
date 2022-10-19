/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation:{
        'show-up': 'show-up 0.5s ease-in'
      },
      keyframes:{
        'show-up': {
          '0%': {
            opacity: '0',
        },
          '100%': {
            opacity: '1'
        },
        
        }
      }
    },
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '640px'},

      'sm': {'max': '430px'},
    },
    boxShadow: {
      '3xl': '0px 0px 6px -3px rgba(66, 68, 90, 1)',
    },

  },
  plugins: [],
};
