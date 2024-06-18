/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				msans: ['"Merriweather Sans"', 'sans-serif'],
				m: ['"Merriweather"', 'sans-serif'],
				rale: ['"Raleway"', 'sans-serif']
			},
			colors: {
				bwhite: '#efefef',
				offwhite: '#f3f4f6'
			}
		}
	},
	plugins: []
};
