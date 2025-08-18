// vite.config.ts
import { defineConfig } from "file:///C:/Users/Keanu/OneDrive/Documents/Portfolio/Portfolio%20Keanu%20Web/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Keanu/OneDrive/Documents/Portfolio/Portfolio%20Keanu%20Web/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///C:/Users/Keanu/OneDrive/Documents/Portfolio/Portfolio%20Keanu%20Web/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\Keanu\\OneDrive\\Documents\\Portfolio\\Portfolio Keanu Web";
var vite_config_default = defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  // Ensure public directory is copied as-is
  publicDir: "public",
  build: {
    assetsDir: "assets",
    assetsInlineLimit: 0,
    // Force all assets to be emitted as files
    copyPublicDir: true,
    // Ensure public directory is copied
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.match(/\.(ico|png|svg|webmanifest)$/)) {
            return "[name][extname]";
          }
          const fileName = assetInfo.name || "asset";
          const info = fileName.split(".");
          const ext = info[info.length - 1].toLowerCase();
          if (ext === "svg") {
            return `assets/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js"
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLZWFudVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcUG9ydGZvbGlvXFxcXFBvcnRmb2xpbyBLZWFudSBXZWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEtlYW51XFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxQb3J0Zm9saW9cXFxcUG9ydGZvbGlvIEtlYW51IFdlYlxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvS2VhbnUvT25lRHJpdmUvRG9jdW1lbnRzL1BvcnRmb2xpby9Qb3J0Zm9saW8lMjBLZWFudSUyMFdlYi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgYmFzZTogJy8nLFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbW9kZSA9PT0gJ2RldmVsb3BtZW50JyAmJlxuICAgIGNvbXBvbmVudFRhZ2dlcigpLFxuICBdLmZpbHRlcihCb29sZWFuKSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxuICAvLyBFbnN1cmUgcHVibGljIGRpcmVjdG9yeSBpcyBjb3BpZWQgYXMtaXNcbiAgcHVibGljRGlyOiAncHVibGljJyxcbiAgYnVpbGQ6IHtcbiAgICBhc3NldHNEaXI6ICdhc3NldHMnLFxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAwLCAvLyBGb3JjZSBhbGwgYXNzZXRzIHRvIGJlIGVtaXR0ZWQgYXMgZmlsZXNcbiAgICBjb3B5UHVibGljRGlyOiB0cnVlLCAvLyBFbnN1cmUgcHVibGljIGRpcmVjdG9yeSBpcyBjb3BpZWRcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm86IHsgbmFtZT86IHN0cmluZywgc291cmNlPzogc3RyaW5nIHwgVWludDhBcnJheSwgdHlwZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICAvLyBLZWVwIGZhdmljb24gZmlsZXMgaW4gcm9vdFxuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZT8ubWF0Y2goL1xcLihpY298cG5nfHN2Z3x3ZWJtYW5pZmVzdCkkLykpIHtcbiAgICAgICAgICAgIHJldHVybiAnW25hbWVdW2V4dG5hbWVdJztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgbmFtZSBtaWdodCBiZSB1bmRlZmluZWRcbiAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGFzc2V0SW5mby5uYW1lIHx8ICdhc3NldCc7XG4gICAgICAgICAgY29uc3QgaW5mbyA9IGZpbGVOYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgY29uc3QgZXh0ID0gaW5mb1tpbmZvLmxlbmd0aCAtIDFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKGV4dCA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgIHJldHVybiBgYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYGFzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgfSxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWSxTQUFTLG9CQUFvQjtBQUM5WixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSGhDLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVMsaUJBQ1QsZ0JBQWdCO0FBQUEsRUFDbEIsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLG1CQUFtQjtBQUFBO0FBQUEsSUFDbkIsZUFBZTtBQUFBO0FBQUEsSUFDZixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxjQUE2RTtBQUU1RixjQUFJLFVBQVUsTUFBTSxNQUFNLDhCQUE4QixHQUFHO0FBQ3pELG1CQUFPO0FBQUEsVUFDVDtBQUVBLGdCQUFNLFdBQVcsVUFBVSxRQUFRO0FBQ25DLGdCQUFNLE9BQU8sU0FBUyxNQUFNLEdBQUc7QUFDL0IsZ0JBQU0sTUFBTSxLQUFLLEtBQUssU0FBUyxDQUFDLEVBQUUsWUFBWTtBQUM5QyxjQUFJLFFBQVEsT0FBTztBQUNqQixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
