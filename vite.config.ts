import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

// https://vitejs.dev/config/
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$atoms: path.resolve('./src/lib/atoms'),
			$molecules: path.resolve('./src/lib/molecules')
		}
	}
};

export default config;
