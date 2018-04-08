new Vue({
  el: '#editor',
  data: {
    input: '# HELLO'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, {
        sanitize: true
      })
    }
  },
  methods: {
    update: _.debounce(function(vm) {
      this.input = vm.target.value
    }, 300)
  }
})
