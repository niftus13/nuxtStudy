<!-- error.vue -->

<template>
    <div class="error-page">
      <h1>에러 발생</h1>
      <p>Status Code: {{ error.statusCode }}</p>
      <p>{{ error.message }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    error: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .error-page {
    text-align: center;
    padding: 5rem;
  }
  </style>
  