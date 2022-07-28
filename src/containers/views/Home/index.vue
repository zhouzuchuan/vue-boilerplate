<script lang="ts" setup>
import { useApp_Store } from '@/models/app'

const appStore = useApp_Store()
appStore.requestInit()
</script>

<template>
    <IconSvg class="logo" name="logo-vue" />

    <div class="hello">
        <h1>欢迎使用 Vue.js 框架</h1>
        <h1 class="fwn">Vue 3 + TypeScript + Vite + Pinia + Data Mock</h1>
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
                <a href="https://chat.vuejs.org" target="_blank" rel="noopener">
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
                <a href="https://news.vuejs.org" target="_blank" rel="noopener">
                    News
                </a>
            </li>
        </ul>
        <h3 class="mt-10">Mock Data One</h3>
        <p class="px-10 mt-5 cor-9">{{ appStore.title }}</p>
        <h3>Mock Data Two</h3>
        <ul>
            <li v-for="a of appStore.packageList[0]" :key="a.name">
                <a :href="a.src" target="_blank" rel="noopener">
                    {{ a.name }}
                </a>
            </li>
        </ul>
        <h3>Mock Data Three</h3>
        <ul>
            <li v-for="a of appStore.packageList[1]" :key="a.name">
                <a :href="a.src" target="_blank" rel="noopener">
                    {{ a.name }}
                </a>
            </li>
        </ul>
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
