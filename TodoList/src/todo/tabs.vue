<template>
  <div class="helper">
    <span class="left"> {{ unFinishedTodoLength }} items left</span>
    <span class="tabs">
      <span 
        v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear completed</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    clearAllCompleted(){
      this.$emit('clearAllCompleted');
    },
    toggleFilter(state){      
      this.$emit('toggleFilter', state);
    }
  },
  computed: {
    unFinishedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  }
}
</script>

<style scoped>
  .helper {
    display: flex;
    width: 640px;
    height: 80px;
    align-items: center;
    background-color: #fff;
  }
  span {
    text-align: center;
    cursor: pointer;
  }
  .left {
    flex-grow: 1;
  }
  .tabs {
    display: flex;
    justify-content: space-around;
    flex-grow: 2;
  }
  .tabs * {
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid rgba(175, 47, 47,0);
  }
  .actived {
    border: 1px solid rgba(175, 47, 47,1);
    border-radius: 5px;
  }
  .clear {
    flex-grow: 1;
  }
</style>
