import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
  ],
  optimizeDeps: {
    // Norton/Avast ponen en cuarentena el bundle de drei que Vite arma en dev
    // ("JS:Prontexi-Z", ver github.com/pmndrs/drei/issues/2239). Sin ese
    // bundle, Vite sirve los modulos de drei por separado. Solo afecta a dev.
    exclude: ['@react-three/drei'],
    include: ["@react-three/drei > stats.js", "@react-three/drei > use-sync-external-store/shim/with-selector.js"],
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        terms: 'terms.html',
      }
    }
  }
})
