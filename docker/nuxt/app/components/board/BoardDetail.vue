<template>
    <div>
        <h2>BoardDetail</h2>

        <div v-if="post">
            <h1>{{ post.title }}</h1>
            <p>{{ post.content }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">
interface Post {
  id: number
  title: string
  content: string
}

const props = defineProps<{
    id:number,
}>()

const { data: post, pending, error } = await useFetch<Post>(
  () => `/api/board/${props.id}`
)
console.log(error)

</script>

<style lang="scss" scoped>

</style>