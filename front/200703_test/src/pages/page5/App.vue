<template>
  <div id="app">
    <h1>페이지 5</h1>
    <table>
      <tr v-for="(a, i) in arr" :key="i" @click="plus(a)">
        <td>{{ a.click }}</td>
        <td>{{ a.time }}</td>
      </tr>
    </table>
    <button type="button" @click="add">현재 시각 추가</button><br>
    <p>클릭 횟수: {{ click }} </p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'App',
  data() {
    return {
      click: 0,
      arr: []
    }
  },
  methods: {
    add() {
      this.arr.push({ click: 0, time: moment().format('HH:mm:ss')})
    },
    plus(a) {
      a.click++
      this.click++
    }
  }
}
</script>

<style scoped>
div {
  padding: 10px;
}
table {
  margin: 10px;
  border-collapse: collapse;
}
tr {
  cursor: pointer;
}
tr:hover {
  background-color: #ffa;
}
td {
  border: 1px solid black;
  padding: 5px;
}
</style>
