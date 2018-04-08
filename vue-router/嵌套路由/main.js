const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

const UserHome = {
  template: `
    <div>Home</div>
  `
}

const UserProfie = {
  template: `
    <div>Profie</div>
  `
}


const UserPost = {
  template: `
    <div>Post</div>
  `
}

const router = new VueRouter({
  routes: [{
    path: '/user/:id',
    component: User,
    children: [{
        path: '',
        component: UserHome
      },
      {
        path: 'profie',
        component: UserProfie
      },
      {
        path: 'post',
        component: UserPost
      }
    ]
  }]
})

new Vue({
  router
}).$mount('#app')
