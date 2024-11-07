<template>
  <div class="landing-title">
    <motion-div
      class="absolute flex justify-center items-center w-full mx-auto text-center"
      :style="{ opacity: opacity.value, scale: scale.value, willChange: willChange.value }"
    >
      <h1
        class="mb-1 font-[700] text-[82px] leading-[.9] text-nav-text font-heading lg:text-8xl"
        v-html="mainHeading"
      />
    </motion-div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useWindowSize, useScroll } from '@vueuse/core'
import { useMotion } from '@vueuse/motion'

const { height } = useWindowSize()
const windowHeight = computed(() => height.value ?? 0)

const containerRef = ref(null)
const mintPage = ref(null)

onMounted(() => {
  containerRef.value = document.getElementById('landing-view')
  mintPage.value = document.getElementById('mint')
})

const { y: scrollY } = useScroll(containerRef)

const opacity = useMotion(scrollY, [0, windowHeight.value / 2], [1, 0])
const scale = useMotion(scrollY, [0, windowHeight.value / 2], [1, 0.5])
const willChange = ref('opacity, scale')

const mainHeading = 'FULL-CYCLE EVENT AGENCY'
</script>

<script>
export default {
  name: 'LandingTitle',
}
</script>

<style scoped>
.landing-title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 2;
}
</style>
