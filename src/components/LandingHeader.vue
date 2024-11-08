<template>
  <header class="fixed top-0 w-full z-10 pt-[24px]">
    <div class="flex justify-center items-center w-full">
      <a href="/" class="w-full flex justify-center">
        <Logo />
      </a>
    </div>
  </header>
</template>

<script setup>
import Logo from '../assets/svgComponents/Logo.vue'
</script>

<script>
export default {
  name: 'LandingHeader',
}
</script>
