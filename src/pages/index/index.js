import Vue from 'vue'

import i18n from '@/plugins/i18n'
import '@/plugins/element-ui'
import store from '@/plugins/store'
import router from '@/plugins/router'

import 'normalize.css'
import 'css.preset'
import '@s/element-variables.scss'
import '@s/index.scss'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app')
