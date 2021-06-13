<template>
    <div>
        Child:
        <button type="button" @click="$emit('send', '#ffa')">노란색</button>
        <button type="button" @click="$emit('send', '#afa')">녹색</button>
    </div>
</template>


<script>
export default {
    name: 'Child'
}
</script>


<style scoped>
    div {
        padding: 20px;
        border: 1px solid black;
        height: 100px;
        line-height: 100px;
    }
</style>