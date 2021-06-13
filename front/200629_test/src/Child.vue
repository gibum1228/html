<template>
    <div>
        <h1>페이지1</h1>
        
         <input type="text" v-model="text">
        <div class="container">
            <span><strong>Child: {{ text }}</strong></span>
        </div>
        <div class="container">
            <span><strong>Child: {{ text }}</strong></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Child',
    data() {
        return {
            text: ""
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
    .container {
        width: 500px;
        height: 100px;
        margin-top: 50px;
        padding-left: 20px;
        border: 1px solid black;
        background-color: rgb(254, 255, 192);
        line-height: 100px;
    }
</style>