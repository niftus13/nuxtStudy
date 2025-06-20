<template>
    <div>
        <h1>게시판 글 수정</h1>
        <BoardForm
        v-if="post"
        :initial="{title: post.title, content: post.content}"
        :postId="id"
        />

        <p v-else-if="error">오류 발생: {{ error.message }}</p>
        <p v-else>불러오는 중...</p>
        <NuxtLink to="/board">돌아가기</NuxtLink>
    </div>
</template>

<script setup>


    const route = useRoute()
    const id = Number(route.params.id)

    const {data : post, error} = await useFetch(`/api/board/${id}`)
</script>

