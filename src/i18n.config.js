/**
 * 国际化配置
 * */

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

export default {
  en: {
    ...enLocale,
    message: 'hello',
    nav: 'Home | About',
    homeText: 'Welcome to Your Vue.js App',
    aboutText: 'This is an about page',
    text1:
      'For a guide and recipes on how to configure / customize this project,',
    text2: ' check out the',
    text3: 'documentation',
    title: 'Installed CLI Plugins | Essential Links | Ecosystem',
  },
  zh: {
    ...zhLocale,
    message: '你好',
    nav: '首页 | 关于',
    homeText: '欢迎使用 Vue.js 框架',
    aboutText: '这是关于页面',
    text1: '有关如何配置 / 自定义此项目的指南和方法，',
    text2: ' 看看',
    text3: '文档',
    title: '已安装的CLI插件 | 基本链接 | 生态系统',
  },
}
