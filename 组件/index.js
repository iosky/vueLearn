let Child = {
  template: '<div>secode custom component!</div>'
}
let app = new Vue({
  el: '#app',
  data: {
    parentMsg: 'Message from parent!',
    total: 0,
    message: []
  },
  components: {
    'my-component2': Child
  },
  methods: {
    incrementTotal: function () {
      this.total++;
    },
    handleMessage: function(payload) {
      this.message.push(payload.message);
    }
  }
})

let app2 = new Vue({
  el: '#app2',
  data: {

  }
})
