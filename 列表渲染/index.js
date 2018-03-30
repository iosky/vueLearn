let app = new Vue({
  el: '#app',
  data: {
    parentMessage: 'Parent',
    items: [
      {msg: 'foo'},
      {msg: 'bar'}
    ],
    numbers: [1, 2, 3, 4, 5],
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function(numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0;
      })
    }
  }
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'do the dishes'
      },
      {
        id: 2,
        title: 'take out the trash'
      },
      {
        id: 3,
        title: 'mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = ''
    }
  }
})