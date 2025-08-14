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
  build: {
    assetsDir: "assets",
    assetsInlineLimit: 0,
    // Force all assets to be emitted as files
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLZWFudVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcUG9ydGZvbGlvXFxcXFBvcnRmb2xpbyBLZWFudSBXZWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEtlYW51XFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxQb3J0Zm9saW9cXFxcUG9ydGZvbGlvIEtlYW51IFdlYlxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvS2VhbnUvT25lRHJpdmUvRG9jdW1lbnRzL1BvcnRmb2xpby9Qb3J0Zm9saW8lMjBLZWFudSUyMFdlYi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgYmFzZTogJy8nLFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbW9kZSA9PT0gJ2RldmVsb3BtZW50JyAmJlxuICAgIGNvbXBvbmVudFRhZ2dlcigpLFxuICBdLmZpbHRlcihCb29sZWFuKSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIGFzc2V0c0RpcjogJ2Fzc2V0cycsXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDAsIC8vIEZvcmNlIGFsbCBhc3NldHMgdG8gYmUgZW1pdHRlZCBhcyBmaWxlc1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbzogeyBuYW1lPzogc3RyaW5nLCBzb3VyY2U/OiBzdHJpbmcgfCBVaW50OEFycmF5LCB0eXBlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIC8vIEhhbmRsZSBjYXNlIHdoZXJlIG5hbWUgbWlnaHQgYmUgdW5kZWZpbmVkXG4gICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBhc3NldEluZm8ubmFtZSB8fCAnYXNzZXQnO1xuICAgICAgICAgIGNvbnN0IGluZm8gPSBmaWxlTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgIGNvbnN0IGV4dCA9IGluZm9baW5mby5sZW5ndGggLSAxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmIChleHQgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYGFzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGBhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgIH0sXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVksU0FBUyxvQkFBb0I7QUFDOVosT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUhoQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUNULGdCQUFnQjtBQUFBLEVBQ2xCLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDaEIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsbUJBQW1CO0FBQUE7QUFBQSxJQUNuQixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxjQUE2RTtBQUU1RixnQkFBTSxXQUFXLFVBQVUsUUFBUTtBQUNuQyxnQkFBTSxPQUFPLFNBQVMsTUFBTSxHQUFHO0FBQy9CLGdCQUFNLE1BQU0sS0FBSyxLQUFLLFNBQVMsQ0FBQyxFQUFFLFlBQVk7QUFDOUMsY0FBSSxRQUFRLE9BQU87QUFDakIsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
