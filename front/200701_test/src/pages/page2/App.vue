<template>
  <div id="app">
    <h1>페이지 2</h1>
    <div>
      <button type="button" :disabled="yellow" @click="yellow = true, green = false, color = '#ffa'">노란색</button>
      <button type="button" :disabled="green" @click="green = true, yellow = false, color = '#afa'">녹색</button>
    </div>
    <Child :color="color"></Child>
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
      yellow: false,
      green: false,
      color: '#fff'
    }
  }
};
</script>


<style>
div#app {
  margin: 30px auto;
  max-width: 700px;
  min-height: 600px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
</style>
