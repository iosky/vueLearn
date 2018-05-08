<template>
  <div id="app">
    a simple demo
    <input v-focus>
  </div>
</template>

<script>
import SayHello from './sayHello'
import Focus from './focus'
import Vue from 'vue'
Vue.use(SayHello)
Vue.use(Focus)

export default {
  name: 'App',
  components: {},
  mounted() {
    Vue.$sayhello.show('friends')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
