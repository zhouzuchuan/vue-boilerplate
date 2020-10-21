/**
 * 这里主要是自动加载 src/icons/svg 中的 .svg 文件
 *
 * **/
import { requireAll } from '@u'

requireAll(require.context('@/icons/svg', false, /\.svg$/))
