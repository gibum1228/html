<template>
    <div :style="{backgroundColor: color}">
        Child
    </div>
</template>


<script>
export default {
    name: 'Child',
    props: ["color"]
}
</script>


<style scoped>
    div {
        border: 1px solid black;
        margin: 20px;
        height: 50px;
        line-height: 50px;
        padding: 20px;
    }
</style>