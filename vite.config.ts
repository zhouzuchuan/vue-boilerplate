import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'

import globby from 'globby'
import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)

const multipleEntryPaths = globby
    .sync(
        [path.join('src', 'pages', '*', 'index.html').split('\\').join('/')],
        {
            cwd: process.cwd(),
        }
    )
    .reduce(
        (result, pathStr) => ({
            ...result,
            [path.parse(pathStr).dir.split('/').pop()]: path.resolve(
                __dirname,
                pathStr
            ),
        }),
        {}
    )

// https://vitejs.dev/config/
export default ({ mode }) => {
    const { VITE_SERVER_REQUEST_URL } = loadEnv(mode, process.cwd())

    const rewriteProxyMap = {
        '^/proxyMockApi': 'http://localhost:1024',
        '^/proxyApi': VITE_SERVER_REQUEST_URL,
    }

    const plugins = [vue()]

    if (mode !== 'development') {
        plugins.push(visualizer())
    } else {
        plugins.push(
            eslintPlugin({
                exclude: ['./node_modules/**'],
                cache: false,
            })
        )
    }

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
        plugins,
        server: {
            proxy: Object.entries(rewriteProxyMap).reduce(
                (r, [k, v]) => ({
                    ...r,
                    [k]: {
                        target: v,
                        changeOrigin: true,
                        rewrite: (path: string) =>
                            path.replace(new RegExp(k), ''),
                    },
                }),
                {}
            ),
        },
    })
}
