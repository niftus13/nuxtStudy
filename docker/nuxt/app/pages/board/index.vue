<template>
    <div>
        <h1>게시판</h1>
        <NuxtLink to="/board/new">글쓰기</NuxtLink>
        <BoardList :posts="posts || []"/>
        
    </div>
</template>

<script setup>
const {data : posts, error} = await useFetch('/api/board')
</script>
