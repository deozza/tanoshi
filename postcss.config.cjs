const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const config = {
	plugins: [
		autoprefixer,
		tailwindcss("./tailwind.config.cjs")
	]
};

module.exports = config;
