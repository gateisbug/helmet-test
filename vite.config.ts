import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import prerender from '@prerenderer/rollup-plugin'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), prerender({
    routes: ['/', '/item', '/character'],
    renderer: "@prerenderer/renderer-puppeteer",
    rendererOptions: {
      maxConcurrentRoutes: 1,
      renderAfterTime: 500,
    },
  })],
})
