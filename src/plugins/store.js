import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import ApiManage from 'api-manage'

import { createApiList } from './api'

// 请求统一处理
const service = axios.create({
  timeout: 1 * 60 * 1000,
})
service.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)
service.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

const apiFiles = require.context('@/api/', true, /\.js$/)

const serviceList = new ApiManage({
  request: service,

  CancelRequest: axios.CancelToken,

  list: createApiList(apiFiles.keys().map(v => apiFiles(v))),
  // 请求验证
  validate: () => true,

  // 提取 response
  limitResponse: res => res.data.result,
}).getService()

// 注入api
Vue.prototype.$service = serviceList

Vue.use(Vuex)

const modelsFiles = require.context('@m', true, /\.js$/)

const store = new Vuex.Store({
  modules: modelsFiles.keys().reduce((modules, modelPath) => {
    const moduleName = modelPath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modelsFiles(modelPath).default
    // models函数化 注入serve化 api
    modules[moduleName] =
      typeof value === 'function' ? value(serviceList) : value
    return modules
  }, {}),
  plugins: [
    // vuex数据持久化
    createPersistedState({
      storage: window.sessionStorage,
      reducer: ({ app }) => ({
        app: {
          sidebarDisplay: app.sidebarDisplay,
        },
      }),
    }),
  ],
})

export default store
