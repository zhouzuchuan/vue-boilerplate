import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'
import Layout from '@cn/Layout.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          component: () => import('@cn/views/Home.vue'),
          name: 'home',
          meta: { title: '首页' },
        },
        {
          path: '/about',
          component: () => import('@cn/views/About.vue'),
          name: 'about',
          meta: { title: '关于' },
        },
      ],
    },

    {
      path: '/404',
      name: 'page404',
      component: () =>
        import(/* webpackChunkName: "page404-[hash]" */ '@cn/Page404.vue'),
    },
    {
      path: '*',
      redirect: '/404',
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
