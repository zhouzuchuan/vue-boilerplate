<template>
  <div>
    <div id="nav">
      <router-link
        v-for="item of paths"
        :key="item.value"
        class="mx-2"
        :to="item.value"
      >
        {{ $tc('nav', item.label) }}
      </router-link>
    </div>
    <div class="lang-box">
      <v-btn
        v-for="item of langs"
        :key="item.value"
        class="mx-2"
        small
        :color="item.value === $i18n.locale ? 'primary' : ''"
        @click="$i18n.locale = item.value"
      >
        {{ item.label }}
      </v-btn>
    </div>

    <div class="ovh">
      <transition name="page-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      paths: [
        {
          label: 1,
          value: '/home',
        },
        {
          label: 0,
          value: '/about',
        },
      ],
      langs: [
        {
          label: 'English',
          value: 'en',
        },
        {
          label: '中文',
          value: 'zh',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--v-primary-base);
    }
  }
}

.lang-box {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
