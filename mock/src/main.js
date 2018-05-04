// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mock from 'mockjs'

let data = Mock.mock({
  'list|1-10': [
    {
      'id|+1': 1
    }
  ]
})

console.log(JSON.stringify(data, null, 4))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
