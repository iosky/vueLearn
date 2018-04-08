// const Foo = {
//   template: `
//     <div>foo</div>
//   `
// }

// const Bar = {
//   template: `
//     <div>bar</div>
//   `
// }

// const Baz = {
//   template: `
//     <div>baz</div>
//   `
// }

// const Home = {
//   template: `
//     <div>
//       <h1>Home</h1>
//       <router-view></router-view>
//     </div>
//   `
// }

// const router = new VueRouter({
//   routes: [
//     {
//       path: '/home',
//       component: Home,
//       children: [
//         {
//           path: 'foo',
//           component: Foo,
//           alias: '/foo'
//         },
//         {
//           path: 'bar',
//           component: Bar,
//           alias: 'bar-alias'
//         },
//         {
//           path: 'baz',
//           component: Baz,
//           alias: ['/baz', 'baz-alias']
//         }
//       ]
//     }
//   ]
// })

// new Vue({
//   router,
//   template: `
//     <div id="app">
//       <h1>vue-router alias</h1>
//       <ul>
//         <li>
//           <router-link to="/foo">foo</router-link>
//         </li>
//         <li>
//           <router-link to="/home/bar-alias">bar</router-link>        
//         </li>
//         <li>
//           <router-link to="/baz">baz</router-link>
//         </li>
//       </ul>
//       <router-view></router-view>
//     </div>
//   `
// }).$mount('#app')

const Home = {
  template: '<div><h1>home</h1><router-view></router-view></div>'
}
const Default = {
  template: '<div>default</div>'
}

const Foo = {
  template: '<div>Foo</div>'
}

const Bar = {
  template: '<div>Bar</div>'
}

const Baz = {
  template: '<div>Baz</div>'
}

const WithParams = {
  template: '<div>{{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [{
      path: '/',
      component: Home,
      children: [{
          path: '',
          component: Default
        },
        {
          path: 'foo',
          component: Foo
        },
        {
          path: 'bar',
          component: Bar
        },
        {
          path: 'baz',
          name: 'baz',
          component: Baz
        },
        {
          path: 'with-params/:id',
          component: WithParams
        },
        {
          path: 'relative-redirect',
          redirect: 'foo'
        }
      ]
    },
    {
      path: '/absolute-redirect',
      redirect: '/bar'
    },
    {
      path: '/dynamic-redirect/:id?',
      redirect: to => {
        const {
          hash,
          params,
          query
        } = to
        if (query.to === 'foo') {
          return {
            path: '/foo',
            query: null
          }
        }
        if (hash === '#baz') {
          return {
            name: 'baz',
            hash: ''
          }
        }
        if (params.id) {
          return 'with-params/:id'
        } else {
          return '/bar'
        }
      }
    },
    {
      path: '/named-redirect',
      redirect: {
        name: 'baz'
      }
    },
    {
      path: '/redirect-with-params/:id',
      redirect: '/with-params/:id'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

new Vue({
  router,
  el: '#app'
})
