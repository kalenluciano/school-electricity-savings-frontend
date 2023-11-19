/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'gray-outline': '#B5B5B5',
				'vibrant-green': '#09AB36',
				'dark-green': '#09862C',
				'deep-blue': '#2364AA',
				'light-blue': '#C6E2FA',
				'gray-blue': '#E2E8F0',
				'light-gray': '#F4F4F4',
				'ink-black': '#00171F',
				'dark-gray': '#494949',
				green: '#55C274',
				red: '#FF3030',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				sans: ['var(--font-public-sans)']
			}
		},
	},
	plugins: [],
};
