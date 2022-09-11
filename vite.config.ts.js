'use strict';

// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
var config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$atoms: path.resolve('./src/lib/atoms'),
			$molecules: path.resolve('./src/lib/molecules')
		}
	}
};
var vite_config_default = config;
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmNvbnN0IGNvbmZpZyA9IHtcblx0cGx1Z2luczogW3N2ZWx0ZWtpdCgpXSxcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQkYXRvbXM6IHBhdGgucmVzb2x2ZSgnLi9zcmMvbGliL2F0b21zJyksXG5cdFx0XHQkbW9sZWN1bGVzOiBwYXRoLnJlc29sdmUoJy4vc3JjL2xpYi9tb2xlY3VsZXMnKVxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQUE7QUFDQTtBQUdBLElBQU0sU0FBUztBQUFBLEVBQ2QsU0FBUyxDQUFDLFVBQVUsQ0FBQztBQUFBLEVBQ3JCLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLFFBQVEsS0FBSyxRQUFRLGlCQUFpQjtBQUFBLE1BQ3RDLFlBQVksS0FBSyxRQUFRLHFCQUFxQjtBQUFBLElBQy9DO0FBQUEsRUFDRDtBQUNEO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
