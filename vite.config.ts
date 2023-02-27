import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$atoms: path.resolve('./src/lib/atoms'),
			$molecules: path.resolve('./src/lib/molecules')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});