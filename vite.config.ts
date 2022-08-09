import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'

// https://vitejs.dev/config/
const config =  {
  plugins: [
    sveltekit()
  ],
  resolve: {
    alias: {
        $lib: path.resolve('./src/lib'),
        '$lib/atoms': path.resolve('./src/lib/atoms'),
        '$lib/molecules': path.resolve('./src/lib/molecules')
    },
  }
}

export default config;
