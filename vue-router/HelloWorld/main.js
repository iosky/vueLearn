// 1. 定义一个路由组件，也可以从其他地方导入进来
const Foo = {
  template: `<div>foo</div>`
}
const Bar = {
  template: `<div>bar</div>`
}

// 2. 定义路由

const routes = [{
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  }
]

// 3.创建路由实例，然后传入路由配置
const router = new VueRouter({
  routes
})

// 4.创建和挂载根实例
const app = new Vue({
  router
}).$mount('#app')
