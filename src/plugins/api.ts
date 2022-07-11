import ApiManage from 'api-manage'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { createApiList } from '@/api.config'

const apiFiles = import.meta.globEager('../apis/*.ts')

// 请求统一处理
const service: any = axios.create({
    timeout: 1 * 60 * 1000,
})

service.interceptors.request.use(
    (config: AxiosRequestConfig) => config,
    (error: AxiosError) => Promise.reject(error)
)

service.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    (error: AxiosError) => Promise.reject(error)
)

export const serviceList = new ApiManage({
    request: service,

    CancelRequest: axios.CancelToken,

    list: createApiList(Object.values(apiFiles).map((v) => v.default)),

    // 请求验证
    validate: (res: AxiosResponse<any>) => {
        const success = res.data.code === 0
        return success
    },

    // 提取 response
    limitResponse: (res: AxiosResponse<any>) => res.data?.data,
}).getService()

/**
 * 获取 api请求函数
 * */
export const useApi = () => ({ ...serviceList })

export default serviceList
