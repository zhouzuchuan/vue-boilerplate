<script lang="ts" setup>
import { useApp_Store } from '@/models/app'

const appStore = useApp_Store()

appStore.getList()
</script>

<template>
    <div>
        <IconSvg class="logo" name="logo-vue" />
        <div class="hello">
            <h1>欢迎使用 Vue.js 框架</h1>
            <p>
                有关如何配置 / 自定义此项目的指南和方法，<br />
                看看
                <a href="https://vitejs.dev/" target="_blank" rel="noopener">
                    vite 文档
                </a>
            </p>
            <h3>已安装的CLI插件</h3>
            <ul>
                <li v-for="a in appStore.packageList[0]" :key="a.name">
                    <a :href="a.src" target="_blank" rel="noopener">
                        {{ a.name }}
                    </a>
                </li>
            </ul>
            <h3>基本链接</h3>
            <ul>
                <li>
                    <a href="https://vuejs.org" target="_blank" rel="noopener">
                        Core Docs
                    </a>
                </li>
                <li>
                    <a
                        href="https://forum.vuejs.org"
                        target="_blank"
                        rel="noopener"
                    >
                        Forum
                    </a>
                </li>
                <li>
                    <a
                        href="https://chat.vuejs.org"
                        target="_blank"
                        rel="noopener"
                    >
                        Community Chat
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/vuejs"
                        target="_blank"
                        rel="noopener"
                    >
                        Twitter
                    </a>
                </li>
                <li>
                    <a
                        href="https://news.vuejs.org"
                        target="_blank"
                        rel="noopener"
                    >
                        News
                    </a>
                </li>
            </ul>
            <h3>生态系统</h3>
            <ul>
                <li v-for="a in appStore.packageList[1]" :key="a.name">
                    <a :href="a.src" target="_blank" rel="noopener">
                        {{ a.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.logo {
    font-size: 16em;
}

a {
    color: var(--v-primary-base);
}

h3 {
    margin: 40px 0 0;
}

ul {
    padding: 0;
    list-style-type: none;
}

li {
    display: inline-block;
    margin: 0 10px;
}
</style>
