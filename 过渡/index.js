let app = new Vue({
  el: '#app',
  data: {
    show: true,
    show2: true,
    show3: true,
    show4: true,
    show5: false,
    view: 'v-a',
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10,
    list: [{
        msg: 'Bruce Lee'
      },
      {
        msg: 'Jackie Chan'
      },
      {
        msg: 'Chuck Norris'
      },
      {
        msg: 'Jet Li'
      },
      {
        msg: 'Kung Fury'
      }
    ],
    query: ''
  },
  methods: {
    // beforeEnter: function  (el) {
    //   el.style.opacity = 0;
    //   el.style.transformOrigin = 'left';
    // },
    // enter: function (el, done) {
    //   Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300} );
    //   Velocity(el, {fontSize: '1em'}, {complete: done});
    // },
    // leave: function (el, done) {
    //   Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600});
    //   Velocity(el, {rotateZ: '100deg'}, {loop: 2});
    //   Velocity(el, {
    //     rotateZ: '45deg',
    //     translateY: '30px',
    //     translateX: '30px',
    //     opacity: 0
    //   }, { complete: done });
    // },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function () {
      this.items = _.shuffle(this.items);
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function (el, done) {
      let delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(
          el, {
            opacity: 1,
            height: '1.6em'
          }, {
            complete: done
          }
        )
      }, delay);
    },
    leave: function (el, done) {
      let delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(
          el, {
            opacity: 0, height: 0
          }, {
            complete: done
          }
        )
      }, delay);
    }
  },
  components: {
    'v-a': {
      template: `<div>Component A</div>`
    },
    'v-b': {
      template: `<div>Component B</div>`
    }
  },
  computed: {
    computedList: function () {
      let vm = this;
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      })
    }
  }
})
