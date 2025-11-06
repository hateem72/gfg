import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Fix chunk size warnings
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunking to reduce bundle size
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion', 'gsap'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          icons: ['react-icons', 'lucide-react', '@fortawesome/react-fontawesome'],
          utils: ['axios', '@tanstack/react-query']
        }
      },
      onwarn(warning, warn) {
        // Suppress "use client" directive warnings from framer-motion
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        warn(warning)
      }
    }
  },
  esbuild: {
    // Suppress CSS minification warnings
    logOverride: { 'css-syntax-error': 'silent' }
  }
})
