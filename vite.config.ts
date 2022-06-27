import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve('src'),
        },
    },
    plugins: [vue()],

    server: {
        proxy: {
            // 字符串简写写法
            '^/proxyMockApi': {
                target: 'http://localhost:1024',
                changeOrigin: true,
            },
        },
    },
})
