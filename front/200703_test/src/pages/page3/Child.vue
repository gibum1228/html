<template>
    <div>
        Child: <input type="text" v-model="text"><br>
        <input type="radio" v-model="color" value="#ffa">노란색
        <input type="radio" v-model="color" value="#afa">연두색
        <input type="radio" v-model="color" value="#faa">분홍색 <br>
        <button type="button" @click="$emit('send', text, color)">ok</button>
    </div>
</template>


<script>
export default {
    name: "Child",
    data() {
        return {
            text: '',
            color: '#ffa'
        }
    }
}
</script>


<style scoped>
    div {
        margin: 20px;
        padding: 10px;
        border: 1px solid black;
        width: 500px;
    }
</style>