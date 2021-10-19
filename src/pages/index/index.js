import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import '@/plugins/icons'
import '@/plugins/components'
import '@/plugins/tools'

import 'normalize.css'
import 'css.preset'
import '@s/index.scss'

import i18n from '@/plugins/i18n'
import vuetify from '@/plugins/vuetify'
import store from '@/plugins/store'
import router from '@/plugins/router'

Vue.use(VueCompositionApi)

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
