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
				blue: {
					600: 'rgb(74, 69, 245)',
					700: 'rgb(80, 61, 255)'
				},
				pink: {
					400: 'rgb(246, 90, 255)'
				},
				gray: {
					850: 'rgb(39, 39, 39)'
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

