import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/containers/views/Home/index.vue' // 引入 Home页面组件

//
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/containers/views/About/index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
