const Home = {
  template: '<div>This is Home</div>'
}

const Foo = {
  template: '<div>This is Foo</div>'
}

const Bar = {
  template: '<div>This is Bar {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    },
    {
      path: '/bar/:id',
      name: 'bar',
      component: Bar
    }
  ]
})

new Vue({
  router
}).$mount('#app')
