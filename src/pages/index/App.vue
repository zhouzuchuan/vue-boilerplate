<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">
                {{ $tc('nav', 1) }}
            </router-link> |
            <router-link to="/about">
                {{ $tc('nav', 0) }}
            </router-link>
        </div>
        <div class="lang-box">
            <el-radio-group v-model="lang" size="mini">
                <el-radio-button label="en">
                    English
                </el-radio-button>
                <el-radio-button label="zh">
                    中文
                </el-radio-button>
            </el-radio-group>
        </div>
        <router-view/>
    </div>
</template>

<script>

export default {
    data() {
        return {
            lang: 'en'
        }
    },
    watch: {
        lang(nv) {
            this.$i18n.locale = nv
        }
    }
}
</script>


<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.lang-box {
    position: fixed;
    top: 10px;
    right: 10px;
}
</style>
