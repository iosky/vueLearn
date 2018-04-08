// const Foo = {
//   template: '<div>Foo</div>'
// }

// const Bar = {
//   template: '<div>Bar</div>'
// }

// const Baz = {
//   template: '<div>Baz</div>'
// }

// const router = new VueRouter({
//   routes: [{
//       path: '/',
//       components: {
//         default: Foo,
//         a: Bar,
//         b: Baz
//       }
//     },
//     {
//       path: '/other',
//       components: {
//         default: Bar,
//         a: Foo,
//         b: Baz
//       }
//     }
//   ]
// })


// new Vue({
//   router,
//   el: '#app'
// })

const UserSettingNav = {
  template: `
    <div class="us-nav">
      <router-link to="/setting/email">emails</router-link>
      <router-link to="/setting/profile">profie</router-link>
    </div>
  `
}

const UserSetting = {
  template: `
    <div class="us">
      <h2>User Setting</h2>
      <UserSettingNav/>
      <router-view class="us-content"/>
      <router-view name="helper" class="us-content us-content-helper"/>
    </div>
  `,
  components: {
    UserSettingNav
  }
}

const UserEmailsSubsciptions = {
  template: `
    <div>
      <h3>Email Subscription</h3>
    </div>
  `
}

const UserPorfile = {
  template: `
    <div>
      <h3>Edit your profile</h3>
    </div>
  `
}

const UserPorfilePreview = {
  template:  `
    <div>
      <h3>Preview your profile</h3>
    </div>
  `
}

const router = new VueRouter({
  routes: [{
    path: '/setting',
    component: UserSetting,
    children: [{
        path: 'email',
        component: UserEmailsSubsciptions
      },
      {
        path: 'profile',
        components: {
          default: UserPorfile,
          helper: UserPorfilePreview
        }
      }
    ]
  }]
})

 router.push('/setting/email')

new Vue({
  router,
  el: '#app'
})


// const UserSettingsNav = {
//   template: `
// <div class="us__nav">
//   <router-link to="/settings/emails">emails</router-link>
//   <br>
//   <router-link to="/settings/profile">profile</router-link>
// </div>
// `
// }
// const UserSettings = {
//   template: `
// <div class="us">
//   <h2>User Settings</h2>
//   <UserSettingsNav/>
//   <router-view class ="us__content"/>
//   <router-view name="helper" class="us__content us__content--helper"/>
// </div>
//   `,
//   components: {
//     UserSettingsNav
//   }
// }

// const UserEmailsSubscriptions = {
//   template: `
// <div>
// 	<h3>Email Subscriptions</h3>
// </div>
//   `
// }

// const UserProfile = {
//   template: `
// <div>
// 	<h3>Edit your profile</h3>
// </div>
//   `
// }

// const UserProfilePreview = {
//   template: `
// <div>
// 	<h3>Preview of your profile</h3>
// </div>
//   `
// }

// const router = new VueRouter({
//   routes: [{
//     path: '/settings',
//     // You could also have named views at tho top
//     component: UserSettings,
//     children: [{
//       path: 'emails',
//       component: UserEmailsSubscriptions
//     }, {
//       path: 'profile',
//       components: {
//         default: UserProfile,
//         helper: UserProfilePreview
//       }
//     }]
//   }]
// })

//  router.push('/settings/emails')

// new Vue({
//   router,
//   el: '#app'
// })
