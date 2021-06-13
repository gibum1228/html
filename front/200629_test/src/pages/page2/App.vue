<template>
  <div id="app">
    <h1>페이지 2</h1>
    <b>App:  {{text}}</b>
    <Child @send="getText"></Child>
  </div>
</template>


<script>
import Child from './Child.vue'

export default { 
  name: "App",
  components: {
    Child
  },
  methods: {
    getText(text) {
      this.text = text
    }
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
  font-size: 25px;
}
</style>
