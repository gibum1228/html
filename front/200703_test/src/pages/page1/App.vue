<template>
  <div id="app">
    <h1>페이지 1</h1>
    <table>
      <tr>
        <td>이름</td>
        <td>나이</td>
        <td></td>
      </tr>
      <tr v-for="(a, i) in lists" :key="i">
        <td>{{ a.name }}</td>
        <td>{{ a.age }}</td>
        <td><button type="button" @click="remove(i)">삭제</button></td>
      </tr>
    </table> 
    <div>
      <label>이름</label><input type="text" v-model="name"><br>
      <label>나이</label><input type="text" v-model="age"><br>
      <button type="button" @click="add">저장</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      lists: [
        { name: '홍길동', age: 16},
        { name: '임꺽정', age: 17}
      ],
      name: '',
      age: 0
    }
  },
  methods: {
    add() {
      this.lists.push({ name: this.name, age: this.age})
      this.name = ""
      this.age = 0
    },
    remove(i) {
      if(confirm('삭제하시겠습니까?')){
        this.lists.splice(i, 1)
      }
    }
  }
}
</script>

<style>
div {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
tr:nth-child(1) {
  background-color: lightgray;
}
table {
  border-collapse: collapse;
  margin: 10px;
}
td {
  border: 1px solid black;
  padding: 10px;
}
</style>
