const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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