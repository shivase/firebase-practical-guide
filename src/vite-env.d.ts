/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COMPLETE_GUIDE_FIREBASE_APPID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
