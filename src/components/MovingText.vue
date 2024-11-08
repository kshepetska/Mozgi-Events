<template>
  <div class="text-container">
    <span class="diagonal-text" ref="text1">
      FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
      AGENCY FULL-CYCLE EVENT AGENCY
    </span>
    <span class="diagonal-text mirrored" ref="text2">
      FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
      AGENCY FULL-CYCLE EVENT AGENCY
    </span>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const text1 = ref(null)
    const text2 = ref(null)

    return {
      text1,
      text2,
    }
  },
}
</script>

<style scoped>
.text-container {
  overflow: hidden;
  position: relative;
  width: 200vw;
  height: 200vh;
  margin: 0 auto;
  transform: rotate(-25deg);
}

.diagonal-text {
  position: absolute;
  font-family: 'Giga Italic';
  font-size: 52px;
  font-weight: 700;
  line-height: 57.2px;
  text-align: center;
  animation: scrollText 30s linear infinite;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 0.4px #373737;
  display: inline-block;
  width: max-content;
}

.mirrored {
  animation: scrollTextReversed 30s linear infinite;
}

.diagonal-text:nth-of-type(1) {
  top: 0;
  left: 0;
}

.diagonal-text:nth-of-type(2) {
  top: 60px;
  left: 0;
}

@keyframes scrollText {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes scrollTextReversed {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
