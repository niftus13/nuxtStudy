<template>
    <div>
        <BoardDetail :id="id"/>
    </div>

</template>

<script setup>


const route = useRoute()
const id = Number(route.params.id)

</script>

