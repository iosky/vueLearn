<template>
  <ul class="help">
    <li class="left">{{ unfinshItem }} left</li>
    <li class="state">
      <div v-for="state in states"
           :key="state"
           :class="filter === state ? 'help-choose' : ''"
           @click="toggleFilter(state)">
        {{ state }}
      </div>
    </li>
    <li class="clear"
        @click="clearAllConfirmed">clear all confirmed</li>
  </ul>
</template>

<script>
export default {
  props: {
    unfinshItem: {
      type: Number,
      required: true
    },
    filter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      states: ['all', 'active', 'confirm']
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit('toggleFilter', state)
    },
    clearAllConfirmed() {
      this.$emit('clearAllConfirmed')
    }
  }
}
</script>

<style>
.help {
  display: flex;
  margin: 0;
  padding: 0;
  background: #ffffff;
}
.help li {
  list-style: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.left {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.state {
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.state div {
  margin: 8px;
  padding: 5px;
  border-radius: 2px;
  transition: all 0.4s ease;
}

.clear {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
.help li div {
  border: 1px solid rgba(0, 0, 0, 0);
}

.help-choose {
  border: 1px solid rgb(150, 96, 96) !important;
}
</style>
