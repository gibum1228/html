<template>
  <div id="app">
    <h1>페이지 4</h1>
    <input type="text" v-model="num" @change="getArr">
    <table>
      <tr v-for="(a, i) in arr" :key="i">
        <td v-for="(aa, j) in a" :key="j">
          {{ aa }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      num: 2,
      arr: [
        [1, 2],
        [3, 4]
      ]
    }
  },
  methods: {
    getArr() {
      this.arr = []

      for(let i = 0; i < this.num; i++){
        this.arr[i] = []
        for(let j = 0; j < this.num; j++){
          this.arr[i][j] = i * this.num + j + 1
        }
      }
    }
  }
}
</script>

<style>
#app {
  margin: 20px;
}
table {
  margin-top: 20px;
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  padding: 5px;
}
</style>
