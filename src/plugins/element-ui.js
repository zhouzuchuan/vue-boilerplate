import Vue from 'vue'
import ElementUI from 'element-ui'

import i18n from './i18n'

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
})
