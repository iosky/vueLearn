let app = new Vue({
  el: '#app',
  data: {
    msg: 'hello world',
    msg2: '不会改变',
    rawHtml: '<div style="color: red"> This should be red.</div>',
    dynamicId: 'person',
    isButtonDisabled: true,
    num: 5,
    ok: false,
    message: 'iosky',
    id: 9,
    seen: true,
    url: 'www.baidu.com'
  },
  methods: {
    doSomething: function () {
      console.log('do Something.....');
    },
    onSubmit: function () {
      console.log('start submit....');
    }
  }
})