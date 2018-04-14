<template>
  <ul class="todo-item">
    <li class="choose"
        @click="confirm">
      <icon :name="todo.icon"
            v-show="true"></icon>
    </li>
    <li :class="['content', todo.state === 'confirm' ? 'confirm' : 'active']"
        @click="confirm">{{ todo.content }}</li>
    <li class="del"
        @click="delTodo">
      <icon name="regular/trash-alt"
            v-show="true"></icon>
    </li>

  </ul>
</template>

<script>
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  components: {
    Icon
  },
  methods: {
    confirm() {
      this.$emit('confirmed', this.todo.id)
    },
    delTodo() {
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style >
.todo-item {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
}

.todo-item li {
  list-style: none;
}

.choose {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-size: 40px;
  font-weight: lighter;
  color: rgb(109, 243, 109);
}

.content {
  width: 520px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  color: #333;
  transition: all 0.7s ease;
}

.del {
  width: 60px;
  height: 60px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa-icon {
  width: 1em;
  height: 1em;
}

.confirm {
  text-decoration: line-through;
  color: #aca7a7;
}
</style>
