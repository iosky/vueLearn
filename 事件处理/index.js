let app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    name: 'iosky'
  },
  methods: {
    greet: function(ev){
      alert('Hello ' + this.name + '!');
      if(ev) {
        alert(ev.target.tagName);
      }
    },
    say: function (msg) {
      alert(msg);
    },
    warn: function(msg, ev) {
      if(ev){
        ev.preventDefault();
      }
      alert(msg);
    }
  }
})
