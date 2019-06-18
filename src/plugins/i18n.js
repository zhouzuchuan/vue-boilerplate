import Vue from 'vue'
import VueI18n from 'vue-i18n'

import i18nConfig from '@/i18n.config.js'

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: i18nConfig,
})

export default i18n
