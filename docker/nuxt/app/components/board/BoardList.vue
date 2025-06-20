<template>
  <div>
    <table v-if="posts.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>
            <NuxtLink :to="`/board/${post.id}`">
              {{ post.title }}
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>게시글이 없습니다.</p>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  posts?: Array<{ id: number; title: string }>
}>(), {
  posts: () => []
})

console.log('posts props:', props.posts)

</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
th, td {
  border: 1px solid #ddd;
  padding: 0.75rem;
  text-align: left;
}
th {
  background-color: #f8f8f8;
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>