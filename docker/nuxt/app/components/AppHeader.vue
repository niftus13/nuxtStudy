<template>
    <header class="app-header">
      <NuxtLink to="/" class="logo">🔥 커뮤니티</NuxtLink>
      <nav class="nav-menu">
        <NuxtLink to="/board">게시판</NuxtLink>
        <NuxtLink to="/about">소개</NuxtLink>
        <NuxtLink to="/login">로그인</NuxtLink>
      </nav>
    </header>   
</template>


<script setup>

</script>

<style>
.app-header {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
}

.nav-menu > * {
  margin-left: 1rem;
  text-decoration: none;
  color: #333;
}
</style>