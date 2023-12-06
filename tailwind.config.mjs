/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				easeIn: {
				  '0%': { transform: 'translateY(10px)' },
				  '100%': { transform: 'translateY(0px)' },
				}
			},
			animation: {
				easeIn: 'easeIn 200ms ease-in',
			},
		},
	},	
	plugins: [],
}
