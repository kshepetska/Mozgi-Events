<template>
  <div class="text-container">
    <img :src="imageSrc" class="diagonal-image" ref="image1" alt="Scrolling Text Line 1" />

    <img :src="imageSrc" class="diagonal-image mirrored" ref="image2" alt="Scrolling Text Line 2" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import imageSrc from '@/assets/line-image.png'

export default {
  setup() {
    const image1 = ref(null)
    const image2 = ref(null)

    /* onMounted(() => {
      gsap.to(image1.value, {
        x: '-100vh',
        duration: 8,
        repeat: -1,
        ease: 'linear',
      })

      gsap.to(image2.value, {
        x: '100vh',
        duration: 8,
        repeat: -1,
        ease: 'linear',
      })
    }) */

    return {
      image1,
      image2,
      imageSrc,
    }
  },
}
</script>

<style scoped>
.text-container {
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
}

.diagonal-image {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.mirrored {
  transform: scaleY(-1) scaleX(-1);
}
</style>
