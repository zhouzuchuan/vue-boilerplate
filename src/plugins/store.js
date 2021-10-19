import Vue from 'vue'
import Vuex from 'vuex'

import { serviceMap } from '@/plugins/api'

Vue.use(Vuex)

const modelsFiles = require.context('@m', true, /\.js$/)

const store = new Vuex.Store({
  modules: modelsFiles.keys().reduce((modules, modelPath) => {
    const moduleName = modelPath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modelsFiles(modelPath).default
    // models函数化 注入serve化 api
    modules[moduleName] =
      typeof value === 'function' ? value(serviceMap) : value
    return modules
  }, {}),
})

export default store
