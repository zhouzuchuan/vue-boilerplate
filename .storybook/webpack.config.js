const path = require('path')
const updateWebpackConfig = require('storybook-readme/vue/updateWebpackConfig')

module.exports = ({ config }) => {
    updateWebpackConfig(config)

    config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname, '../stories'),
    }

    config.module.rules.push({
        test: /\.vue$/,
        loader: 'storybook-addon-vue-info/loader',
        options: {
            docgenOptions: {
                alias: config.resolve.alias,
            },
        },
        enforce: 'post',
    })

    config.module.rules.push({
        test: /\.stories\.js$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    })

    return config
}
