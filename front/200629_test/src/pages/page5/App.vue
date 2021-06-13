<template>
  <div id="app">
    <h1>페이지5</h1>
    <table>
      <tr v-for="(a, i) in arr" :key="i">
        <td v-for="(b, j) in a" :key="j" :style="{ backgroundColor: b.color }" @click="change(i, j)">
          {{ b.num}}
        </td>
      </tr>
    </table>
    <b>클릭수: {{count}}</b>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      arr: [],
      count: 0
    }
  },
  methods: {
    change(i, j) {
      this.arr[i][j].color = '#ffa'
      this.count++
    }
  },
  created() {
    for(let i = 0; i < 4; i++){
      this.arr[i] = []
      for(let j = 0; j < 4; j++){
        let dic = { num: i * 4 + j + 6, color: '#afa'}
        this.arr[i][j] = dic
      }
    }
  }
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
table {
  margin: 25px;
  border-collapse: collapse;
}
td {
  padding: 10px;
  text-align: center;
  border: 1px solid black;
}
</style>
