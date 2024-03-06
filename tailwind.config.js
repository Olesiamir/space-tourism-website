/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    colors: {
      'dark-blue': '#0B0D17',
      'violet': '#D0D6F9',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      'bellefair': ['Bellefair', 'sans-serif'],
      'barlow': ['Barlow', 'sans-serif'],
      'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
    },
    letterSpacing: {
      wide: '2.36px',
      wider: '2.7px',
      widest: '4.72px',
    },
    fontSize: {
      xs: ['14px', {
        letterSpacing: '2.36px'
      }],
      sm: ['16px', {
        letterSpacing: '2.7px',
        fontWeight: '100'
      }],
      base: ['18px', '32px'],
      lg: '28px',
      xl: '32px',
      '2xl': '56px',
      '2xxl': '80px',
      '3xl': '100px',
      '4xl': '150px',
    },
    extend: {
      backgroundImage: {
        'home-mobile': "url('/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
        'destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",        
        'technology-mobile': "url('/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('/assets/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')",        
      },
      animation: {
        'pulse-shadow-width': 'pulse-shadow-width 1.5s ease-in-out infinite'
      },
      keyframes: {
        'pulse-shadow-width': {
          '0%, 100%': {
            boxShadow: '0px 0px 10px 0px rgba(150, 150, 150, 0)',
          },
          '50%': {
            boxShadow: '0px 0px 1px 48px rgba(150, 150, 150, 0.5)'
          }
        }
      }
    },
  },
  plugins: [],
}

