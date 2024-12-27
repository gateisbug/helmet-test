import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/helmet-test/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        item: 'item.html',
        chara: 'chara.html',
      },
    },
  },
})
