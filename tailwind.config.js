/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

// object that copies someTheme, for each element changes the lineHeight to a value of '120%'
const alteredFontSize = Object.fromEntries(
  Object.entries(defaultTheme.fontSize).map(([ key, value ]) => {
    return [ key, [ value[ 0 ], { lineHeight: '120%' } ] ]
  })
)

export const THEME_COLORS = {
  "black": "#141414",
  "white": "#FFFFFF",
  "red": {
    "50": "#fff6f4",
    "100": "#fde6e3",
    "200": "#fdd2cb",
    "300": "#ecaca2",
    "400": "#f6816f",
    "500": "#ef5d47",
    "600": "#da3e25",
    "700": "#b7301b",
    "800": "#972b1a",
    "900": "#7d2a1d",
    "950": "#43120a"
  },
  "yellow": {
    "50": "#fffcf4",
    "100": "#fff3d0",
    "200": "#ffe498",
    "300": "#fdcd44",
    "400": "#ffc315",
    "500": "#e9ad00",
    "600": "#b58601",
    "700": "#896601",
    "800": "#594200",
    "900": "#2d2100",
    "950": "#171000"
  },
  "green": {
    "50": "#f0fdef",
    "100": "#dffad9",
    "200": "#c9f1bf",
    "300": "#99e28a",
    "400": "#68d06b",
    "500": "#5fba5f",
    "600": "#44a343",
    "700": "#178922",
    "800": "#16691e",
    "900": "#15571b",
    "950": "#06340a"
  },
  "blue": {
    "50": "#eef6ff",
    "100": "#dbebff",
    "200": "#b7d1f0",
    "300": "#8eb0da",
    "400": "#6b95c8",
    "500": "#557dae",
    "600": "#4171ab",
    "700": "#2a60a1",
    "800": "#205595",
    "900": "#164680",
    "950": "#0e3360"
  },
  "sand": {
    "50": "#fffcf4",
    "100": "#fff7e1",
    "200": "#f9e6c1",
    "300": "#e2cb9d",
    "400": "#ceb687",
    "500": "#ac9463",
    "600": "#958056",
    "800": "#624d22",
    "900": "#392d12",
    "950": "#231a06"
  },
  "google": {
    "bg": "#FFFFFF",
    "bghover": "rgba(238, 238, 238, 1)",
    "bgdisabled": "rgba(140, 140, 140, 1)",
    "text": "rgba(0, 0, 0, 0.54)",
    "textdisabled": "rgba(0, 0, 0, 0.54)"
  }
}

module.exports = {
  THEME_COLORS,
  content: [
    // add folders containing tailwind code
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    fontSize: alteredFontSize,
    fontFamily: {
      sans: ['"Helvetica Neue"', '"Arial Nova"', 'Helvetica', 'Arial', 'sans-serif'],
      grotesk: ['var(--vremena-font)', '"Arial Nova"', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['"Helvetica Neue"', '"Arial Nova"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: THEME_COLORS,
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, top: 0},
          '100%': { opacity: 1, top: '2.5rem'},
        },
      },
      animation: {
        'slide-down': 'slideDown 0.5s ease',
      },
    },
    container: {
      center: true,
      padding: '5vw',
    },
  },
  plugins: [
    //require('prettier-plugin-tailwindcss'),
    require('tailwindcss-animated')
  ]
}