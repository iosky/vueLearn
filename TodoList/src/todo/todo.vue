<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么?"
      @keyup.enter="addTodo"

    >
    <Item
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @del="deleteTodo"
     ></Item>
    <Tabs :filter="filter" :todos="todos" @toggleFilter="toggleFilter" @clearAllCompleted="clearAllCompleted" ></Tabs>
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";

let id = 0;

export default {
  data() {
    return {
      todos: [],
      filter: 'all'
    };
  },
  methods: {
    addTodo(e) {
      if(e.target.value.trim()) {
        this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
      e.target.placeholder = '今天，要做点什么嘞？让我好好想想。。。。';
      } else {
        e.target.value = '';
        e.target.placeholder = '兄弟，请输入内容！！';
      }
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => todo.completed === false);
    }
  },
  computed: {
    filteredTodos() {
      if(this.filter === 'all') {
        return this.todos;
      }
      const isCompleted = this.filter === 'completed';
      return this.todos.filter(todo => isCompleted === todo.completed);
    }
  },
  components: {
    Item,
    Tabs
  }
};
</script>

<style scoped>
.real-app input {
  box-sizing: border-box;
  width: 640px;
  height: 80px;
  padding-left: 60px;
  outline: none;
  font-size: 18px;
  border: none;
}
</style>
