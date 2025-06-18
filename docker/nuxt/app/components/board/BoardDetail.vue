<template>
    <div>
        <h2>BoardDetail</h2>
        <div v-if="pending">불러오는중 ..</div>
        <div v-else-if="error">오류발생</div>
        <div v-else-if="post">
            <h1>{{ post.title }}</h1>
            <p>{{ post.content }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">

defineProps<{
    id:number,
}>()

const {data: post, pending, error} = await useFetch(() => `/api/board/${id}`)

</script>

<style lang="scss" scoped>

</style>