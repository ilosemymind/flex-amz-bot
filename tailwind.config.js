/** @type {import('tailwindcss').Config} */
export default {
	content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
        'neue-machina': ["Neue Machina", "sans-serif"]
      },
		},
  },
  plugins: [],
}

