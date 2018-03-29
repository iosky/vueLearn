let vm = new Vue({
  el: '#app',
  data: {
    message: 'hello',
    firstName: 'foo',
    lastName: 'bar',
    fullName: 'foo bar',
    question: '',
    answer: 'I cannot give you an answer until you ask a question'
  },
  computed: {
    reversedMessage: function () {
      // this 指向vm实例
      return this.message.split('').reverse().join('');
    },
    fullName2: {
      get: function () {
        return this.firstName + ' ' + this.lastName;
      },
      set: function (newValue) {
        let name = newValue.split(' ');
        this.firstName = name[0];
        this.lastName = name[name.length - 1];
      }
    }
  },
  methods: {
    reversed: function () {
      return this.message.split('').reverse().join('');
    }
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val;
    },
    question: function(newQuestion, oldQuestion) {
      this.answer = 'waiting for you to stop typing';
      console.log('正在调用取得答案函数。。。。');
      //this.getAnswer();
    }
  }
})

vm.message = 'Goodbye';
console.log(vm.reversedMessage);