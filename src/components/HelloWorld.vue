<template>
  <div class="hello">
    <h1 v-t="{path: 'homeText'}"> </h1>
    <p>
      {{$t('text1')}}<br> {{$t('text2')}}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli {{$t('text3')}}</a>.
    </p>
    <h3>{{$tc('title', 0)}}</h3>
    <ul>
      <li v-for="a in packageList[0]" :key="a.name">
        <a :href="a.src" target="_blank" rel="noopener">{{a.name}}</a>
      </li>
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
      <li v-for="a in packageList[1]" :key="a.name">
        <a :href="a.src" target="_blank" rel="noopener">{{a.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: mapState('app', ['packageList']),
  methods: mapActions('app', ['getList']),
  created() {
    this.getList()
  }
}
</script>

<style scoped lang="scss"   >
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
