import Vue from 'vue'
import modelRedux from 'model-redux'
import apiManage from 'api-manage'
import nprogress from 'nprogress'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import ElementLocale from 'element-ui/lib/locale'

import appModel from '@m/app.js'
import router from './router'
import App from './App.vue'

import i18nConfig from '@/i18n.config.js'

const { store, registerModel } = modelRedux.create()

Vue.prototype.dispatch = store.dispatch

// 注入element-ui 组件以及国际化
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: i18nConfig,
})
ElementLocale.i18n((key, value) => i18n.t(key, value))
Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value),
})

// 注册model
registerModel(appModel)

// 请求统一处理
const service = axios.create({
    timeout: 1 * 60 * 1000,
})
service.interceptors.request.use(config => config)
service.interceptors.response.use(config => config)

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
    request: service,
    list: require('@/api'),
})

Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app')
