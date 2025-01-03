/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_BASE_URL: string;
  VITE_NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
