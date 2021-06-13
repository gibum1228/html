<template>
  <div id="app">
    <h1>페이지 4</h1>
    <table>
      <tr v-for="(item, index) in peoples" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
      </tr>
    </table>
    <div>
      <label>이름: </label>
      <input type="text" v-model="name"><br>
      <label>나이: </label>
      <input type="text" v-model="age"><br>
      <button type="button" @click="add">저장</button>
    </div>
  </div>
</template>


<script>
export default { 
  name: "App",
  data() {
    return {
      peoples: [],
      name: '',
      age: '0'
    }
  },
  methods: {
    add() {
      let dic = {}
      dic.name = this.name
      dic.age = this.age
      this.peoples.push(dic)

      this.name = ""
      this.age = '0'
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
  text-align: center;
  margin: 25px;
}
td {
  border: 1px solid black;
}
</style>
