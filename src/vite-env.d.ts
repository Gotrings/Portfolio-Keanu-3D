/// <reference types="vite/client" />

interface ImportMeta {
  glob: {
    (pattern: string, options?: { eager?: boolean; as?: string }): Record<string, any>;
  };
}

declare const __APP_VERSION__: string;
