<template>
    <div>
        <p>
            <b>Child:  {{ text }}</b>
        </p>    
    </div>    
</template>

<script>
export default {
    name: "Child",
    props: [ "text" ]
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