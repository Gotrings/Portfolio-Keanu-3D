import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure public directory is copied as-is
  publicDir: 'public',
  build: {
    assetsDir: 'assets',
    assetsInlineLimit: 0, // Force all assets to be emitted as files
    copyPublicDir: true, // Ensure public directory is copied
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: { name?: string, source?: string | Uint8Array, type: string }) => {
          // Keep favicon files in root
          if (assetInfo.name?.match(/\.(ico|png|svg|webmanifest)$/)) {
            return '[name][extname]';
          }
          // Handle case where name might be undefined
          const fileName = assetInfo.name || 'asset';
          const info = fileName.split('.');
          const ext = info[info.length - 1].toLowerCase();
          if (ext === 'svg') {
            return `assets/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
}));
