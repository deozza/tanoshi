import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { HstSvelte } from '@histoire/plugin-svelte'
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
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		coverage: {
			provider: 'v8',
			reporter: ['html'],
			reportsDirectory: './tests/coverage'
		}
	},
	histoire: {
		plugins: [
		  HstSvelte(),
		],
	  },
	  server: {
		host: '0.0.0.0'
	  }
});
