const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
	'text-sm',
	'text-md',
	'text-lg',
	'text-xl',
	'text-2xl',
	'text-3xl',
	'h-black',
	'h-white',
	'h-primary',
	'h-secondary',
	'h-info',
	'h-success',
	'h-warning',
	'h-danger',
	'p-black',
	'p-white',
	'p-primary',
	'p-secondary',
	'p-info',
	'p-success',
	'p-warning',
	'p-danger',
  ],
  theme: {
		extend: {
			colors: {
				primary: colors.blue[500],
				'primary-dark': colors.blue[600],
				secondary: colors.gray[500],
				'secondary-dark': colors.gray[600],
				success: colors.green[500],
				'success-dark': colors.green[600],
				warning: colors.yellow[500],
				'warning-dark': colors.yellow[600],
				danger: colors.red[500],
				'danger-dark': colors.red[600],
				info: colors.cyan[300],
				'info-dark': colors.cyan[400]
			}
		}
	},
  plugins: [],
}