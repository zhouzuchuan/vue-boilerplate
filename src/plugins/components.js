/**
 * 这里主要是自动注入 src/components 中的 index.vue 组件
 *
 * **/
import Vue from 'vue'
import { requireAll } from '@u'
import _ from 'lodash'

const componentContext = require.context('@/components/', true, /\/index\.vue$/)

const extractTagNameForFilePath = (path) =>
  _.kebabCase(path?.match?.(/\/components\/(.*)\/index.vue/)?.[1])

requireAll(componentContext).map(({ default: item }) => {
  let componentTagName = item.name ?? extractTagNameForFilePath(item.__file)
  if (componentTagName) {
    Vue.component(componentTagName, item)
  }
})
