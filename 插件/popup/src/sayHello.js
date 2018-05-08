import SayHello from './components/sayhello'

let $vm

export default {
  install(Vue, options) {
    if (!$vm) {
      const SayHelloPlugin = Vue.extend(SayHello)

      $vm = new SayHelloPlugin({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    $vm.isshow = false

    let sayhello = {
      show(text) {
        $vm.isshow = true
        $vm.text = text
      },
      hide() {
        $vm.show = false
      }
    }
    if (!Vue.$sayhello) {
      Vue.$sayhello = sayhello
    }
  }
}
