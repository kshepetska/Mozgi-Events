<template>
  <div class="flex justify-center items-center absolute top-[50%] w-full">
    <motion-div
      class="absolute z-[2] flex justify-center items-center w-full mx-auto text-center"
      :style="{ opacity: opacity.value, scale: scale.value, willChange: willChange.value }"
    >
      <h1 class="font-[700] text-[82px] leading-[60.2px] text-black" v-html="mainHeading" />
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

const mainHeading = 'FULL-CYCLE <br></br> EVENT AGENCY'
</script>

<script>
export default {
  name: 'LandingTitle',
}
</script>
