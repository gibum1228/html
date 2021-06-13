<template>
  <div id="app" :style="{ backgroundColor: color }">
    <h1>페이지 3</h1>
    <b>App: {{ text }}</b>
    <Child @send="save"></Child>
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
  },
  methods: {
    save(t, c) {
      this.text = t
      this.color = c
    }
  }
}
</script>

<style>
div#app {
  border: 1px solid black;
  width: 800px;
  margin: 20px;
  padding: 10px;
}
</style>
