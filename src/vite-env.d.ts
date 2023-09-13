/// <reference types="vite/client" />
/// <reference types="./vite-env-override.d.ts" />

interface importmetaenv {
    readonly vite_custom_env_variable: string
}

interface importmeta {
    readonly env: importmetaenv
}
