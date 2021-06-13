<template>
  <div id="app">
    <h1>페이지 4</h1>
    <table>
      <tr v-for="(time, i) in timeTable" :key="i">
        <td :style="{ backgroundColor: time.color }" @click="change(time)">
          {{ time.time }}
        </td>
      </tr>
    </table>
    <button type="button" @click="add">현재 시각 추가</button>
    <p>
      <b>클릭 수:  {{ count }}</b>
    </p>
  </div>
</template>


<script>
import moment from 'moment'

export default {
  name: "App",
  data() {
    return {
      timeTable: [],
      count: 0
    }
  },
  methods: {
    add() {
      this.timeTable.push({ time: moment().format("HH:mm:ss"), color: "#fff"})
    },
    change(time) {
      time.color = "#ffa"
      this.count++
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
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  text-align: center;
  padding: 5px;
  cursor: pointer;
}
</style>
