import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'
import Home from '@cn/Home.vue'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '@cn/About.vue'),
        },
    ],
})

// 路由统一处理
router.beforeEach((to, from, next) => {
    nprogress.start() // 开启Progress
    next()
})
router.afterEach(() => {
    nprogress.done() // 结束Progress
})

export default router
