/**
 * 这里主要是自动注入 src/components 中的 index.vue 组件
 *
 * **/
import Vue from 'vue'
import { requireAll } from '@u'

const componentContext = require.context('@/components/', true, /\/index\.vue$/)

requireAll(componentContext).map(({ default: item }) => {
  let componentName = item.name ?? ''
  if (componentName) {
    Vue.component(componentName, item)
  }
})
