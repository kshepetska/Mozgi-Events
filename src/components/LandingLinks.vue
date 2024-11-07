<template>
  <div>
    <div class="corner-text left-center" @click="navigateToSection('what')">where?</div>
    <div class="corner-text right-center" @click="navigateToSection('where')">what?</div>
    <div class="corner-text left-bottom" @click="navigateToSection('who')">who?</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToSection = (section: string) => {
  router.push(`/${section}`)
}
</script>

<style scoped>
.corner-text {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
  z-index: 3;
}

.left-center {
  top: 50%;
  left: 20px;
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: left center;
}

.right-center {
  top: 50%;
  right: 20px;
  transform: translateY(-50%) rotate(90deg);
  transform-origin: right center;
}

.left-bottom {
  bottom: 20px;
  left: 50%;
  transform-origin: bottom center;
}
</style>
