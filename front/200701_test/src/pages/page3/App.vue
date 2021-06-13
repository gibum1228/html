<template>
  <div id="app" :style="{ backgroundColor: color }">
    <h1>페이지 3</h1>
    <Child @send="change"></Child>
  </div>
</template>


<script>
import Child from './Child.vue'

export default {
  name: "App",
  components: {
    Child
  },
  data() {
    return {
      color: '#fff'
    }
  },
  methods: {
    change(value) {
      this.color = value
    }
  }
};
</script>


<style>
div#app {
  margin: 30px auto;
  max-width: 700px;
  min-height: 300px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
  padding: 20px;
}
</style>
