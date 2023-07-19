/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			  },
			
			animation: {
				// Bounces 5 times 1s equals 5 seconds
				'bounce-short': 'bounce 7s  linear forwards',
				'ping' : '1s cubic-bezier(0, 0, 0.2, 1) 10',
				'jello': 'jello 2s ',
			  },
			  keyframes: {
				jello: {
					'from, 11.1%,to': {
					  transform: 'translate3d(0, 0, 0)',
					},
		  
					'22.2%': {
					  transform: 'skewX(-12.5deg) skewY(-12.5deg)',
					},
		  
					'33.3%': {
					  transform: 'skewX(6.25deg) skewY(6.25deg)',
					},
		  
					'44.4%': {
					  transform: 'skewX(-3.125deg) skewY(-3.125deg)',
					},
		  
					'55.5%': {
					  transform: 'skewX(1.5625deg) skewY(1.5625deg)',
					},
		  
					'66.6%': {
					  transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
					},
		  
					'77.7%': {
					  transform: 'skewX(0.390625deg) skewY(0.390625deg)',
					},
		  
					'88.8%': {
					  transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
					},
				  },

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
						'transform': 'translateY( ter50%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
					  },
				  }
			  }
		},
	},
	plugins: [],
}
