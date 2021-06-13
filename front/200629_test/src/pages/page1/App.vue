<template>
  <div id="app">
    <h1>페이지 1</h1>
    <input type="text" v-model="text">
    <Child :text="text"></Child>
    <Child :text="text"></Child>
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
      text: ''
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
