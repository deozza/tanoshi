import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: './src/lib/main.ts',
      name: 'Tanoshi',
    },
  },
  plugins: [
    svelte({
      compilerOptions:{
        customElement: true,
      }
    })
  ],
  resolve: {
    alias: {
        $lib: path.resolve('./src/lib'),
        '$lib/atoms': path.resolve('./src/lib/atoms'),
        '$lib/molecules': path.resolve('./src/lib/molecules')
    },
  }
})
