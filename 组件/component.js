Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

let data = {
  counter: 0
};

Vue.component('simple-component', {
  template: '<button @click="counter += 1"> {{ counter }} </button>',
  // data: function() {
  //   return data;
  // }
  data: function () {
    return {
      counter: 0
    }
  }
})

Vue.component('child', {
  props: ['msg', 'myMessage'],
  template: '<span>{{ myMessage }}</span>'
})

Vue.component('button-counter', {
  template: '<button @click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter ++;
      this.$emit('increment');
    }
  }
})

Vue.component('button-message', {
  template: `<div>
    <input type="text" v-model="message"/>
    <button @click="handleSendMessage">Send</button>
  </div>`,
  data: function() {
    return {
      message: 'text message'
    }
  },
  methods: {
    handleSendMessage: function () {
      this.$emit('message', {message: this.message})
    }
  }
})
