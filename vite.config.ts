import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1].toLowerCase();
          if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return `assets/${ext}/[name]-[hash][extname]`;
        },
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean) as Plugin[],
  // Removed automatic React import to prevent conflicts with existing imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
