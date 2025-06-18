<template>
    <div>
      <MainHeader />
      <main class="main-container">
        <slot />
      </main>
      <MainFooter />
    </div>
  </template>
  
  <script setup>

  
  </script>

<style>
.main-container {
  max-width: 1024px;  /* Tailwind의 container 기본 max-width */
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}
</style>