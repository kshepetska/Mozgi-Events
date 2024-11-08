<template>
  <div
    class="landing-page relative flex items-center justify-center w-screen h-screen p-6 bg-gray-300 overflow-hidden flex-col"
    @mousemove="handleMouseMove"
  >
    <div
      class="background-circle absolute w-[600px] h-[600px] bg-yellow-300 rounded-full blur-[80px] z-0"
    ></div>

    <LandingHeader />
    <LanguageSwitcher />
    <LandingTitle :style="titleStyle" />
    <MotionText />
    <LandingLinks />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LandingHeader from '../components/LandingHeader.vue'
import LandingTitle from '../components/LandingTitle.vue'
import LandingLinks from '../components/LandingLinks.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import MotionText from '../components/MovingText.vue'

const router = useRouter()

const titleStyle = ref({
  transform: 'translate(0px, 0px)',
})

const handleMouseMove = (event: MouseEvent) => {
  const mouseX = event.clientX
  const mouseY = event.clientY

  const offsetX = (mouseX - window.innerWidth / 2) / 30
  const offsetY = (mouseY - window.innerHeight / 2) / 30

  titleStyle.value = {
    transform: `translate(${offsetX}px, ${offsetY}px)`,
  }
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
  padding: 1.5rem;
  background-color: #e0e0e0;
  overflow: hidden;
  flex-direction: column;
}
</style>
