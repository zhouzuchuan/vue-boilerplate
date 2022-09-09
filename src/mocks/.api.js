require('data-mock/lib/requireTS')

const globby = require('globby')
const path = require('path')
const { mock } = require('mockjs')
const { bindApi } = require('api-manage')
const { transferApiManageList } = require('data-mock/lib/utils/tools')
const { serverParams } = require('../api.config.ts')

module.exports = {
    // 载入api目录清单
    apis: transferApiManageList(
        bindApi(
            globby
                .sync([
                    path
                        .resolve(__dirname, '..', 'apis', '*.ts')
                        .split('\\')
                        .join('/'),
                ])
                .map((v) => require(v).default),
            serverParams
        )
    ),
    // 接口返回统一格式
    sendResult(res, data = [], options = {}) {
        const { delay = 1000, ...otherOpt } = options
        setTimeout(
            () =>
                res.json(
                    mock({
                        code: 0,
                        msg: '成功',
                        data,
                        ...otherOpt,
                    })
                ),
            delay
        )
    },
}
