let app = new Vue({
  el: '#app',
  data: {
    isActive: true,
    hasError: false,
    isSeen: true,
    error: null,
    classObject: {
      active: true,
      'text-danger': true
    },
    activeClass: 'active isTrue',
    errorClass: 'text-danger',
    activeColor: 'red',
    fontSize: 30,
    styleObject: {
      color: 'red',
      fontSize: '30px'
    },
    styleObject2: {
      backgroundColor: 'black',
      boxShadow: '0 0 20px rgba(0,0,0,0.2)'
    }
  },
  computed: {
    classObject2: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})