export interface ImportMetaEnv {
    VITE_PORT?: string
    VITE_AUTH_TOKEN?: string
}

interface ImportMeta {
    env: ImportMetaEnv
}
