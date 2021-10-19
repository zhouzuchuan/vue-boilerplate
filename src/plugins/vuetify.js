import Vue from 'vue'
import Vuetify from 'vuetify'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify-dialog/dist/vuetify-dialog.css'

import zhHans from 'vuetify/es5/locale/zh-Hans'

const vuetify = new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        // primary: '#FF5C00',
        // secondary: '#2372FD',
        // accent: '#409EFF',
        // error: '#F56C6C',
      },
    },
  },
  lang: {
    locales: { zhHans },
    current: 'zhHans',
  },
})

Vue.use(Vuetify)
Vue.use(VuetifyDialog, {
  context: {
    vuetify,
  },
})

export default vuetify
