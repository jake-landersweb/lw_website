module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      "sans": ['Rubik']
    },
    extend: {
      colors: {
        primary: "#2b8df0",
        xc: "#7bc5d6",
        cm: "#eabe72",
        cheetah: "#ce9d41",
        txt: {
          DEFAULT: '#28282D',
          200: '#3c3c41',
          300: '#505055',
          400: '#646469'
        },
        bgdk: {
          600: '#b9b9be',
          700: '#cdcdd2',
          800: '#e1e1e6',
          900: '#F5F5FA'
        },
      }
    },
  },
  plugins: [],
}
