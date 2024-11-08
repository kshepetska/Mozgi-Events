<template>
  <div>
    <div class="corner-text left-center" @click="navigateToSection('where')">{{ $t('Where') }}</div>
    <div class="corner-text right-center" @click="navigateToSection('what')">{{ $t('What') }}</div>
    <div class="corner-text left-bottom" @click="navigateToSection('who')">{{ $t('Who') }}</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()

const navigateToSection = (section) => {
  router.push(`/${section}`)
}
</script>

<script>
export default {
  name: 'LandingLinks',
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
  display: inline-block;
}

.corner-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}

.corner-text:hover {
  color: white;
}

.corner-text:hover::after {
  width: 100%;
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
  transform: translateX(-50%);
  transform-origin: bottom center;
}
</style>
