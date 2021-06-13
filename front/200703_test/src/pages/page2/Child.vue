<template>
    <div :style="{ backgroundColor: color }">
        <b>Child:  {{ text }}</b>
    </div>
</template>


<script>
export default {
    name: 'Child',
    props: [ 
        "text",
        "color"
    ]
}
</script>


<style scoped>
    div {
        margin: 20px;
        padding: 10px;
        width: 300px;
        height: 100px;
        line-height: 100px;
        border: 1px solid black;
    }
</style>