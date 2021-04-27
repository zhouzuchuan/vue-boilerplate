<template>
  <div>
    <div id="nav">
      <router-link to="/home">
        {{ $tc('nav', 1) }}
      </router-link>
      <router-link to="/about">
        {{ $tc('nav', 0) }}
      </router-link>
    </div>
    <div class="lang-box">
      <el-radio-group v-model="$i18n.locale" size="mini">
        <el-radio-button label="en"> English </el-radio-button>
        <el-radio-button label="zh"> 中文 </el-radio-button>
      </el-radio-group>
    </div>

    <div class="ovh">
      <transition name="page-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
