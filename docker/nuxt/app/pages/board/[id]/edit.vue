<template>
    <div class="form">
        <form @submit.prevent="submit">
          <input v-model="title" />
          <textarea v-model="content" />
          <button>수정</button>
          <p v-if="error">{{ error }}</p>
        </form>
    </div>
</template>

<script setup>

    const id = Number(useRoute().params.id)
    const { data: post } = await useFetch(`/api/board/${id}`)

    const { title, content, error, submit } = usePostForm({
    initial: post.value,
    postId: id
    })



</script>

