<template>
  <div class="background-circle"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.background-circle {
  position: absolute;
  width: 600px;
  height: 600px;
  background-color: #ffde59;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 1;
}
</style>
