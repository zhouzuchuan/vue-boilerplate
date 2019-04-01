import Vue from 'vue'
import Vuex from 'vuex'
import apiManage from 'api-manage'
import nprogress from 'nprogress'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import ElementLocale from 'element-ui/lib/locale'
import createPersistedState from 'vuex-persistedstate'
import 'normalize.css'
import '@/element-variables.scss'

import app from '@m/app.js'
import router from './router'
import App from './App.vue'

import i18nConfig from '@/i18n.config.js'

Vue.use(Vuex)

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

const serviceList = apiManage.init({
    request: service,
    list: require('@/api'),
})
// 注入api
Vue.prototype.$service = serviceList

Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    store: new Vuex.Store({
        // models函数化 注入serve化 api
        modules: Object.entries({ app }).reduce(
            (r, [k, v]) => ({ ...r, [k]: typeof v === 'function' ? v(serviceList) : v }),
            {},
        ),
        plugins: [
            // vuex数据持久化
            createPersistedState({
                storage: window.sessionStorage,
            }),
        ],
    }),
    render: h => h(App),
}).$mount('#app')
