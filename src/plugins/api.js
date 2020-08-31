/**
 *
 * api server 管理
 *
 * PS: 这里用node来导出模块 是为了在mock中mock服务使用，并且mock中监听了该文件，有更改则刷新mock
 *
 * */

const { bindApi } = require('api-manage')

function createApiList(apiPaths) {
    return bindApi(apiPaths, {
        // 目录清单注入server
        server: '',
    })
}

module.exports = {
    createApiList,
}
