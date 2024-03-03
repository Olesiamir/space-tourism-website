/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    colors: {
      'dark-blue': '#0B0D17',
      'violet': 'D0D6F9',
      'white': 'FFFFFF',
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
        letterSpacing: '2.7px'
      }],
      base: ['18px', '32px'],
      lg: '28px',
      xl: '32px',
      '2xl': '56px',
      '3xl': '100px',
      '4xl': '150px',
    },
    extend: {
      backgroundImage: {
        'home-mobile': "url('./public/assets/home/background-home-mobile.jpg')",
      }
    },
  },
  plugins: [],
}

