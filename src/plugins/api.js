import Vue from 'vue'
import axios from 'axios'
import ApiManage from 'api-manage'

import { createApiList } from '../api.config.js'

// 请求统一处理
const service = axios.create({
  timeout: 1 * 60 * 1000,
})
service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)
service.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

const apiFiles = require.context('@/api/', true, /\.js$/)

export const serviceMap = new ApiManage({
  request: service,

  CancelRequest: axios.CancelToken,

  list: createApiList(apiFiles.keys().map((v) => apiFiles(v))),

  // 请求验证
  validate: () => true,

  // 提取 response
  limitResponse: (res) => res.data.data,
}).getService()

// 注入api
Vue.prototype.$api = serviceMap

export default service
