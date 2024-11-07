<script setup>
import { RouterLink } from 'vue-router'
import { Icons } from '../ui-kit/Icons'
</script>

<template>
  <header class="fixed top-0 w-full pt-2 px-6 md:pt-6 md:px-10 z-10">
    <div class="flex justify-between items-center w-full">
      <a href="/" class="w-full max-w-[7.5rem] text-nav-text">
        <Icons.Logo />
      </a>
    </div>
  </header>
</template>
<script>
export default {
  name: 'LandingHeader',
}
</script>
