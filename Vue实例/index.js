let vm = new Vue({
  // 选项
})

let data = {
  a: 1
};

let app = new Vue({
  data: data
})

console.log(app.a === data.a);

app.a = 2;
console.log(data.a);

data.a  = 3;

console.log(app.a);

Object.freeze(data);

let data2 = {
  foo: 'bar'
}

Object.freeze(data2);

new Vue({
  el: '#root',
  data: data2
})

let data3 = {
  a: 1
}

let app2 = new Vue({
  el: '#root',
  data: data3
})

console.log(app2.$data === data3);
console.log(app2.$el === document.getElementById('root'));

app2.$watch('a', function (newValue, oldVulue) {
  // 在app.a改变后调用
  console.log('a被改变啦！');
})


new Vue({
  data: {
    a: 1
  },
  created: function() {
    // this 指向vue实例
    console.log('a is : ' + this.a);
  }
})