const { bindApi } = require('api-manage')

// const { readAllApi } = require('@u')

const server = process.env.NODE_ENV === 'development' ? '' : window.address.http

module.exports = bindApi([require('./home')], {
    // 目录清单注入server
    server,
})
