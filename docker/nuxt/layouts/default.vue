<template>
    <div>
      <AppHeader />
      <main class="container mx-auto p-4">
        <slot />
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import AppHeader from '~/components/AppHeader.vue'
  import AppFooter from '~/components/AppFooter.vue'
  </script>