<template>
  <div id="app">
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './todo/header.vue';
import Footer from './todo/footer.vue';
import Todo from './todo/todo.vue';
export default {
  components: {
    Header,
    Footer,
    Todo
  }
};
</script>

<style scoped>

</style>


