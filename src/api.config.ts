/**
 *
 * api server 管理
 *
 * PS:
 * 这个文件也是会被 mock server 引用到 node 运行时中
 * 1、在这里使用 node 不支持的 api 会导致 mock server 启动失败
 * 2、引入的第三包 如果支持 node 环境 也会导致 mock server 启动失败
 *
 * 解决方案
 * 1、可以通过 mock server 引用时 注入的 环境变量 _DATA_MOCK_ 来区分 引用场景
 * 2、使用兼容性的第三方包
 *
 * */

import ApiManage from 'api-manage'

export const serverParams = {
    // 目录清单注入server
    server: process.env._DATA_MOCK_
        ? ''
        : process.env.VITE_MODE === 'development'
        ? ['/proxyMockApi', '/proxyApi'][0]
        : process.env.VITE_SERVER_REQUEST_URL,
}

export type ServerParams = typeof serverParams

export const createApiList = (apiPaths: any) =>
    ApiManage.bindApi(apiPaths, serverParams)
