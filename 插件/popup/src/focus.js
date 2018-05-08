export default {
  install(Vue, option) {
    Vue.directive('focus', {
      bind: function() {},
      inserted: function(el, binding, vnode, oldVnode) {
        el.focus()
      },
      update: function() {},
      componentUpdated: function() {},
      unbind: function() {}
    })
  }
}
