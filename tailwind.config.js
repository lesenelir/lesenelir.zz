const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'comic': ['Comic Sans MS', 'sans-serif'],
        'icon': ['iconfont', 'sans-serif'],
      },
      colors: {
        // navbar right side
        navbarLight: '#374151',
        navbarDark: '#E5E7EB',
        // main text color
        textLight: '#555555',
        textDark: '#BBBBBB',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
