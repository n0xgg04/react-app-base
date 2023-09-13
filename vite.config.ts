import { defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { ImportMetaEnv } from './src/env'

export default defineConfig(({ mode }: UserConfig): UserConfig => {
    const env = loadEnv(mode || 'local', process.cwd(), '')
    return {
        server: {
            port: Number((env as ImportMetaEnv).VITE_PORT) || 3000,
        },
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        esbuild: {
            jsxInject: `import React from 'react'`,
        },
        build: {
            outDir: 'build',
            sourcemap: true,
        },
        envDir: './',
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src/'),
                components: `${path.resolve(__dirname, './src/components/')}`,
                public: `${path.resolve(__dirname, './public/')}`,
                pages: path.resolve(__dirname, './src/pages'),
                types: `${path.resolve(__dirname, './src/@types')}`,
                styles: `${path.resolve(__dirname, './src/styles')}`,
                '@config': `${path.resolve(__dirname, './src/config')}`,
            },
        },
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
            },
        },
    }
})
