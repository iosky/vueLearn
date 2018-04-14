<template>
  <div id="app">
    <todo-header/>
    <todo-main/>
    <todo-footer/>
  </div>
</template>

<script>
import todoHeader from './components/header.vue'
import todoMain from './components/main.vue'
import todoFooter from './components/footer.vue'

import './assets/style/global.css'

export default {
  name: 'App',
  components: {
    todoHeader,
    todoMain,
    todoFooter
  }
}
</script>

<style>
#app {
  width: 640px;
}
</style>
