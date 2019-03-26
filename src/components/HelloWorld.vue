<template>
  <div class="hello">
    <h1 v-t="{path: 'homeText'}"> </h1>
    <p>
      {{$t('text1')}}<br> {{$t('text2')}}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli {{$t('text3')}}</a>.
    </p>
    <h3>{{$tc('title', 0)}}</h3>
    <ul>
      <li v-for="a in cliList" :key="a.name">
        <a :href="a.src" target="_blank" rel="noopener">{{a.name}}</a>
      </li>
      <!-- <li>
        <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a>
      </li> -->
    </ul>
    <h3>{{$tc('title', 1)}}</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>{{$tc('title', 2)}}</h3>
    <ul>
      <li v-for="a in packageList" :key="a.name">
        <a :href="a.src" target="_blank" rel="noopener">{{a.name}}</a>
      </li>
      <!-- <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li> -->
    </ul>
  </div>
</template>

<script>





export default {
  name: 'HelloWorld',
  data() {
    return {
      cliList: [],
      packageList: []
    }
  },
  created() {
    this.$service.serveGetPackageList().then(({ data }) => {
      this.cliList = data.result[0]
      this.packageList = data.result[1]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
    color: #42b983;
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
