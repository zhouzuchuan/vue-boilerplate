import Vue from 'vue'
import ElementUI from 'element-ui'
import ElementLocale from 'element-ui/lib/locale'

import i18n from './i18n'

ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value),
})
