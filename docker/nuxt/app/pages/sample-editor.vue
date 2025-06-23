<template>
  <SampleEditor v-model="content" />
  <hr />
  <h2>📝 미리보기</h2>
  <div v-html="content" class="prose" />
</template>

<script setup>
const content = ref('<p>초기 내용입니다</p>')
</script>