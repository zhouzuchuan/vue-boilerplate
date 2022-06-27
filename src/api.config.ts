/**
 *
 * api server 管理
 *
 * PS: 这里用node来导出模块 是为了在mock中mock服务使用，并且mock中监听了该文件，有更改则刷新mock
 *
 * */

import ApiManage from 'api-manage'

export const serverParams = {
    // 目录清单注入server
    server: ['/proxyMockApi'][0],
}

export type ServerParams = typeof serverParams

export const createApiList = (apiPaths: any) =>
    ApiManage.bindApi(apiPaths, serverParams)
