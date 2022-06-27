import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
} from 'vue-router'
import Home from '@/containers/views/Home.vue' // 引入 Home页面组件

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
        component: () => import('@/containers/views/About.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
