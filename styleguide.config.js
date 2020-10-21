const path = require('path')
const { bindServer } = require('data-mock')
const pkg = require('./package.json')

module.exports = {
  title: pkg.name,
  version: pkg.version,
  components: 'src/components/**/**/[A-Z]*.{vue,jsx}',
  defaultExample: true,
  minimize: false,
  ribbon: {
    text: 'Back to boilerplate',
    url: 'https://github.com/zhouzuchuan/vue-boilerplate',
  },
  configureServer(server) {
    bindServer({
      server,
      target: path.resolve(__dirname, './src/mocks/'),
      watchTarget: path.resolve(__dirname, '../src/api/'),
    })
  },
  // 定义props和方法选项卡的初始状态
  usageMode: 'expand',
  // 定义示例代码选项卡的初始状态
  exampleMode: 'collapse',

  // 生成的静态HTML样式指南的文件夹
  styleguideDir: 'docs',

  renderRootJsx: path.join(__dirname, 'styleguide/root.js'),
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // }
}
