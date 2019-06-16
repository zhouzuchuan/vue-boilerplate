import Vue from 'vue'
import axios from 'axios'
import apiManage from 'api-manage'

// 请求统一处理
const service = axios.create({
    timeout: 1 * 60 * 1000,
})
service.interceptors.request.use(config => config, error => Promise.reject(error))
service.interceptors.response.use(response => response, error => Promise.reject(error))

const serviceList = apiManage.init({
    request: service,
    list: require('@/api'),
    // 请求验证
    validate: () => true,
})

// 注入api
Vue.prototype.$service = serviceList

export default serviceList
