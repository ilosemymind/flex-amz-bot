const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
        'neue-machina': ['Neue Machina', ...defaultTheme.fontFamily.sans]
      },
			colors: {
				red: {
					300: 'rgb(233, 86, 86)'
				},
				blue: {
					600: 'rgb(74, 69, 245)',
					700: 'rgb(80, 61, 255)'
				},
				pink: {
					400: 'rgb(246, 90, 255)'
				},
				gray: {
					800: 'rgb(51, 51, 51)',
					850: 'rgb(39, 39, 39)',
					900: 'rgb(28, 28, 28)',
					925: 'rgb(24, 24, 24)'
				},
				sky: {
					200: 'rgb(104, 225, 251)'
				}
			},
			screens: {
				'xs': '480px',
			}
		},
  },
  plugins: [],
}

