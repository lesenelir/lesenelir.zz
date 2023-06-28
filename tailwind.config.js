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
        // background color
        bgLight: '#FFFFFF',
        bgDark: '#1D1F24',
        // navbar right side
        navbarLight: '#374151',
        navbarDark: '#E5E7EB',
        // main text color
        textLight: '#555555',
        textDark: '#BBBBBB',
        // border bottom underline
        borderUnderline: '#7D7D7D',
        // posts year color
        yearColor: '#AAAAAA',
        // text strong
        textLightStrong: '#000000',
        textDarkStrong: '#FFFFFF',
        // post text title color
        postTextLight: '#222222',
        postTextDark: '#DDDDDD',
        // code bg color
        codeBgLight: '#E8EBEB',
        codeBgDark: '#4b4b4b',
        // pre code bg color
        preCodeBgLight: '#F8F8F8',
        preCodeBgDark: '#0E0E0E',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.textLight'),
            a: {
              color: theme('colors.textLightStrong'),
              textDecoration: 'none',
              fontWeight: 'normal',
              paddingBottom: '1px',
              borderBottom: '1px solid rgba(125, 125, 125, 0.3)',
              '&:hover': {
                borderBottom: '1px solid rgba(125, 125, 125, 1)',
              },
            },
            strong: {
              color: theme('colors.textLightStrong'),
            },
            hr: {
              width: '50%',
              height: '1px',
              border: 'none',
              margin: '32px auto',
              backgroundColor: theme('colors.borderUnderline'),
              opacity: 0.3
            },
            'h1,h2,h3,h4': {
              color: theme('colors.postTextLight'),
            },
            img: {
              width: '100%'
            },
            blockquote: {
              padding: '0 16px',
              fontStyle: 'normal',
              fontWeight: 'normal',
              color: theme('colors.textLight'),
              opacity: 0.7,
              borderLeft: '4px solid #7D7D7D',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
            code: {
              color: theme('colors.textLightStrong'),
              padding: '4px',
              borderRadius: '4px',
              margin: '0 2px',
              fontWeight: 'normal',
              opacity: 0.7,
              backgroundColor: theme('colors.codeBgLight'),
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            pre: {
              fontsize: '8px',
              backgroundColor: null,
              padding: '16px 0',
              margin: '8px 0',
            },
            'pre code': {
              opacity: 0.8,
              backgroundColor: `${theme('colors.preCodeBgLight')} !important`,
              borderRadius: '4px',
            }
          },
        },
        dark: {
          css: {
            color: theme('colors.textDark'),
            a: {
              color: theme('colors.textDarkStrong'),
              textDecoration: 'none',
              fontWeight: 'normal',
              paddingBottom: '1px',
              borderBottom: '1px solid rgba(125, 125, 125, 0.5)',
              '&:hover': {
                borderBottom: '1px solid rgba(125, 125, 125, 1)',
              },
            },
            strong: {
              color: theme('colors.textDarkStrong'),
            },
            hr: {
              width: '50%',
              height: '1px',
              border: 'none',
              margin: '32px auto',
              backgroundColor: theme('colors.borderUnderline'),
              opacity: 0.3
            },
            'h1,h2,h3,h4': {
              color: theme('colors.postTextDark'),
            },
            img: {
              width: '100%'
            },
            blockquote: {
              padding: '0 16px',
              fontStyle: 'normal',
              fontWeight: 'normal',
              color: theme('colors.textDark'),
              opacity: 0.8,
              borderLeft: '4px solid #7D7D7D',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
            code: {
              color: theme('colors.textDarkStrong'),
              padding: '4px',
              borderRadius: '4px',
              margin: '0 2px',
              fontWeight: 'normal',
              opacity: 0.8,
              backgroundColor: theme('colors.codeBgDark'),
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            pre: {
              fontsize: '8px',
              backgroundColor: null,
              padding: '16px 0',
              margin: '8px 0',
            },
            'pre code': {
              opacity: 0.8,
              padding: '16px',
              backgroundColor: `${theme('colors.preCodeBgDark')} !important`,
              borderRadius: '4px',
            }
          },
        },
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
