<template>
  <div id="app">
    <router-link to='/child.html'>Child</router-link>
    <a href="page1.html">페이지1</a>
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import Child from './Child.vue'

var router = new VueRouter({
  routes: [
    {path: '/child.html', component: Child }
  ]
})

export default {
  name: 'App',
  router
}
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
