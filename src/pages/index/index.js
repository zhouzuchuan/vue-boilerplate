import Vue from 'vue'
import modelRedux from 'model-redux'
import apiManage from 'api-manage'
import nprogress from 'nprogress'

import appModel from '@m/app.js'
import router from './router'
import App from './App.vue'

const { store, registerModel } = modelRedux.create()

Vue.prototype.dispatch = store.dispatch

// 注册model
registerModel(appModel)

// 路由统一处理
router.beforeEach((to, from, next) => {
    nprogress.start() // 开启Progress
    next()
})

router.afterEach(() => {
    nprogress.done() // 结束Progress
})

// 注入api
Vue.prototype.$service = apiManage.init({
    list: require('@/api'),
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
