<template>
  <div class="absolute left-[24px] top-[24px] group">
    <button
      type="button"
      @click="toggleLanguage"
      class="text-2xl text-white border-2 border-white rounded-full p-2 hover:scale-110 transition-transform"
    >
      <img :src="Language" alt="Language" />
    </button>

    <div
      class="absolute left-0 top-[50px] flex flex-col items-start opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <button
        v-if="currentLanguage !== 'RU'"
        @click="setLanguage('RU')"
        class="text-black text-lg py-2 px-4 rounded-md transition-colors"
      >
        RU
      </button>
      <button
        v-if="currentLanguage !== 'UA'"
        @click="setLanguage('UA')"
        class="text-black text-lg py-2 px-4 rounded-md transition-colors"
      >
        UA
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Language from '../assets/language.png'

const currentLanguage = ref('EN')

function toggleLanguage(event) {
  event.preventDefault()

  currentLanguage.value = currentLanguage.value === 'EN' ? 'RU' : 'EN'
  console.log('Language toggled to:', currentLanguage.value)
}

function setLanguage(lang) {
  currentLanguage.value = lang
  console.log('Language set to:', lang)
}
</script>

<script>
export default {
  name: 'LanguageSwitcher',
}
</script>

<style scoped>
.group:hover .absolute {
  opacity: 1;
}

.group .absolute {
  opacity: 0; /* Ensure the language buttons are hidden by default */
}
</style>
