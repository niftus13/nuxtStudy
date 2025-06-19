<template>
    <div>
        <h1>게시글 작성 폼</h1>
        <form @submit.prevent="createPost">
            <input v-model="title" placeholder="제목"/>
            <textarea v-model="content" placeholder="내용"/>
            <button type="submit">등록</button>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
import { usePostForm } from '~/composables/usePostForm';


const {title, content, error, createPost} = usePostForm()

</script>

<style scoped>
input, textarea {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>