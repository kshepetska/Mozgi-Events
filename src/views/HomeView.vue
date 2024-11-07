<template>
  <div class="landing-page">
    <div class="background-circle"></div>

    <LandingHeader />
    <LandingTitle />
    <MotionText />
    <LandingLinks />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import LandingHeader from '../components/LandingHeader.vue'
import LandingTitle from '../components/LandingTitle.vue'
import LandingLinks from '../components/LandingLinks.vue'
import MotionText from '../components/MovingText.vue'
const router = useRouter()

const navigateToSection = (section: string) => {
  router.push(`/${section}`)
}
</script>

<style scoped>
.landing-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #d3d3d3;
  overflow: hidden;
  flex-direction: column;
}

.background-circle {
  position: absolute;
  width: 600px;
  height: 600px;
  background-color: #ffde59;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
}

.showreel-circle {
  position: absolute;
  right: 50%;
  transform: translate(50%, 0);
  bottom: 20%;
  width: 120px;
  height: 120px;
  border: 2px solid #333333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.showreel-text {
  font-size: 14px;
  color: #333333;
  writing-mode: vertical-rl;
  transform: rotate(90deg);
  text-align: center;
}
</style>
