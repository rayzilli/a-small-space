/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				// Bounces 5 times 1s equals 5 seconds
				'bounce-short': 'bounce 7s  linear forwards' 
				  
			  },
			  keyframes: {

				 bounce: {
					'0%, 100%' : {
					  'transform': 'translateY(-80%)',
					  'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%' :{
					  'transform': 'translateY(200%)',
					  'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
					}, 
					'100%' : {
						'transform': 'translateY(50%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
					  },
				  }
			  }
		},
	},
	plugins: [],
}
