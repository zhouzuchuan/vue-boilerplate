// api储存

const globby = require('globby')
const path = require('path')
const { mock } = require('mockjs')
const { createApiList } = require('../api.config.js')

const extractApi = (data) => {
  return Object.entries(data).reduce((r, [method, apis]) => {
    return Object.entries(apis).reduce((r2, [apiName, apiPath]) => {
      return {
        ...r2,
        [apiName]: `${method} ${apiPath}`,
      }
    }, r)
  }, {})
}

module.exports = {
  // 载入api目录清单
  api: extractApi(
    createApiList(
      globby
        .sync([path.resolve(__dirname, '../api') + '/*.js'])
        .map((v) => require(v))
    )
  ),
  // 接口返回统一格式
  returnAcition(res, data = [], options = {}) {
    const { delay = 1000, otherOpt } = options
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
