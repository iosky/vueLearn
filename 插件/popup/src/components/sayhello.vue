<template>
  <div class="hello-box"
       v-show="isshow">
    <p>hello</p>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    isshow: Boolean,
    text: {
      type: String,
      default: 'Wait a time'
    }
  }
}
</script>

<style>
p {
  font-size: 28px;
  text-align: center;
}
</style>
