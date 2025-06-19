<template>
    <div>
        <ul v-if="posts?.length">
            <li v-for="post in posts" :key="post.id">
                <NuxtLink :to="`/board/edit/${post.id}`">
                    {{ post.title }}
                </NuxtLink>
            </li>
        </ul>
        <p v-else>게시글이 없습니다.</p>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    posts: Array<{ id: number, title: string}>
}>()

</script>

<style scoped>
ul {
  padding: 0;
  list-style: none;
}
li {
  margin-bottom: 0.5rem;
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>