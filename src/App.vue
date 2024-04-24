<template>
  <main>
    <RouterLink to="/">
      Index Page
    </RouterLink>
    <span class="border">|</span>
    <RouterLink to="/about">
      About Page
    </RouterLink>
    <RouterView />
  </main>
</template>

<script setup>
</script>

<style scoped>
#app {
  @apply min-h-screen;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.border {
  padding: 0 4px;
}
</style>
