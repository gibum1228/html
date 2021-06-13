<template>
  <div id="app">
    <h1>페이지 2</h1>
    <input type="text" v-model="text">
    <br>
    <input type="radio" v-model="color" value="#ffa">노란색
    <input type="radio" v-model="color" value="#afa">연두색
    <input type="radio" v-model="color" value="#faa">분홍색
    <Child :text="text" :color="color"></Child>
    <Child :text="text" :color="color"></Child>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'App',
  components: {
    Child
  },
  data() {
    return {
      text: "",
      color: "#ffa"
    }
  }
}
</script>

<style>
body {
  padding: 10px;
}
</style>
