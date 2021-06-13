<template>
    <div>
        Child:
        <input type="text" v-model="text">
        <button type="button" @click="$emit('send', text)">ok</button>
    </div>
</template>


<script>
export default {
    name: "Child",
    data() {
        return {
            text: ''
        }
    }
}
</script>



<style scoped>
    div {
        padding: 0 20px 20px 20px;
        margin: 20px;
        font-size: 25px;
        background-color: #ffa;
        border: 1px solid black
    }
</style>