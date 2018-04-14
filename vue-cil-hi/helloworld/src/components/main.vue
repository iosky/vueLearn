<template>
  <main>
    <input type="text"
           name="todo-input"
           autofocus
           @keyup.enter="addTodo"
           :placeholder="placeholder">
    <todo-item v-for="todo in filteredTodo"
               :todo="todo"
               :key="todo.id"
               @del="delTodoItem"
               @confirmed="confirmed" />
    <todo-help :unfinshItem="unfinshItem"
               :filter="filter"
               @toggleFilter="toggleFilter"
               @clearAllConfirmed="clearAllConfirmed" />
  </main>
</template>

<script>
import todoItem from './todoItem'
import todoHelp from './help'

let id = 0

export default {
  data() {
    return {
      index: 1,
      placeholder: 'What needs to be done?',
      placeholders: [
        'What needs to be done?',
        '兄弟，好好输入，ok？',
        '这已经是第二次了，搞事情啊！',
        '谢谢配合了，大哥！！！！'
      ],
      todos: [],
      filter: 'all'
    }
  },
  components: {
    todoItem,
    todoHelp
  },
  methods: {
    addTodo(e) {
      let value = e.target.value.trim()
      if (value) {
        this.todos.push({
          content: value,
          state: 'active',
          id: id++,
          icon: 'regular/square'
        })
        e.target.value = ''
        this.placeholder = this.placeholders[0]
      } else {
        if (this.index > this.placeholders.length - 1) {
          this.index = 0
        }
        this.placeholder = this.placeholders[this.index++]
      }
    },
    delTodoItem(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter(state) {
      this.filter = state
    },
    clearAllConfirmed() {
      this.todos = this.todos.filter(todo => todo.state !== 'confirm')
    },
    confirmed(id) {
      // this.todo.state = this.todo.state === 'confirm' ? 'actvie' : 'confirm'
      // this.todo.icon =
      //   this.todo.icon === 'regular/square'
      //     ? 'regular/check-square'
      //     : 'regular/square'
      let index = this.todos.find(todo => todo.id === id)
      index.state = index.state === 'confirm' ? 'active' : 'confirm'
      index.icon =
        index.icon === 'regular/square'
          ? 'regular/check-square'
          : 'regular/square'
    }
  },
  computed: {
    unfinshItem() {
      return this.todos.filter(todo => todo.state === 'active').length
    },
    filteredTodo() {
      switch (this.filter) {
        case 'all':
          return this.todos
          break
        default:
          return this.todos.filter(todo => todo.state === this.filter)
          break
      }
    }
  }
}
</script>

<style>
main {
  min-height: 240px;
  position: relative;
}

label {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  top: 0;
  right: 0;
  font-size: 20px;
  color: rgb(104, 102, 102);
}

input {
  height: 60px;
  width: 520px;
  outline: none;
  border: none;
  padding: 0 60px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
  font-size: 20px;
}
</style>
