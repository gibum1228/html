<template>
  <div id="app">
    <h1>페이지 3</h1>
    <div id="div" :style="{ backgroundColor: color }">
      {{ count }}
    </div>
    <button type="button" @click="color = '#ffa'; count++" >노란색</button>
    <button type="button" @click="color = '#afa'; count++">연두색</button>
  </div>
</template>


<script>
export default { 
  name: "App",
  data() {
    return {
      count: 0,
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
#div {
  width: 600px;
  height: 100px;
  margin: 25px;
  border: 1px solid black;
  line-height: 100px;
  padding: 10px
}
</style>
