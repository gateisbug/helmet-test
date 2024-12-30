import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import prerender from '@prerenderer/rollup-plugin'

// https://vite.dev/config/
export default defineConfig({
  base: '/helmet-test/',
  plugins: [react(), prerender({
    routes: ['/', '/item', '/character'],
    renderer: "@prerenderer/renderer-puppeteer",
    server: {
      port: 3000,
      host: 'localhost'
    },
    rendererOptions: {
      maxConcurrentRoutes: 1,
      renderAfterTime: 500,
    },
    postProcess(renderedRoute) {
      renderedRoute.html = renderedRoute.html
        .replace(/http:/i, "https:")
        .replace(
          /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
          "https://seo-optimization-test.netlify.app/"
        );
    },
  })],
})
