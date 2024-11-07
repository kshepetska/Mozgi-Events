<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <landing-title />
  <header></header>

  <RouterView />
</template>
<style scoped>
@font-face {
  font-family: 'Giga';
  src: url('@/assets/fonts/GrtskGiga-Bold.ttf') format('truetype');
}

body {
  font-family: 'Giga', sans-serif;
}
</style>
