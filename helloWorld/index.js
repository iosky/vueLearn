var app = new Vue({
  el: '#app',
  data: {
    message: 'hello'
  }
})

var app2 = new Vue({
  el: "#app2",
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

let app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
})

let app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      {text: '学习JavaScript'},
      {text: '学习Vue'},
      {text: '学习HTML'}
    ]
  }
})

let app5 = new Vue({
  el: '#app5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

let app6 = new Vue({
  el: '#app6',
  data: {
    message: 'Hello Vue!'
  }
})

/**
 * 学习使用vue的组件系统
 * 现在，我们先来编写一个简单的组件吧
 */

 Vue.component('todo-item', {
   props: ['todo'],
   template: '<li>{{ todo.text }}</li>'
 })

 let app7 = new Vue({
   el: '#app7',
   data: {
     groceryList: [
       {id: 0, text: '蔬菜'},
       {id: 1, text: '奶酪'},
       {id: 2, text: '随便其他什么可以吃的东西'}
     ]
   }
 })