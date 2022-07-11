import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import globby from 'globby'
import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)

const multipleEntryPaths = globby
    .sync([path.join('src', 'pages', '*', 'index.html')], {
        cwd: process.cwd(),
    })
    .reduce((result, pathStr) => {
        const entryName = path.parse(pathStr).dir.split('/').pop()
        return {
            ...result,
            [entryName]: path.resolve(__dirname, pathStr),
        }
    }, {})

// https://vitejs.dev/config/
export default ({ mode }) => {
    const { VITE_SERVER_REQUEST_URL } = loadEnv(mode, process.cwd())

    return defineConfig({
        define: {
            'process.env': {
                VITE_MODE: mode,
                VITE_SERVER_REQUEST_URL,
            },
        },
        base: './',
        build: {
            rollupOptions: {
                input: multipleEntryPaths,
            },
        },
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        plugins: [vue()],

        server: {
            proxy: {
                '^/proxyMockApi': {
                    target: 'http://localhost:2222',
                    changeOrigin: true,
                },

                '^/proxyApi': {
                    target: VITE_SERVER_REQUEST_URL,
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/proxyApi/, ''),
                },
            },
        },
    })
}
