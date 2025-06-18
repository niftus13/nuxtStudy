<template>
    <div>
      <AppHeader />
      <main class="main-container">
        <slot />
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import AppHeader from '~/components/AppHeader.vue'
  import AppFooter from '~/components/AppFooter.vue'

  
  </script>

<style>
.main-container {
  max-width: 1024px;  /* Tailwind의 container 기본 max-width */
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}
</style>