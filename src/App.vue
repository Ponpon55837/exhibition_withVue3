<template>
  <div class="box-border" :class="darkMode ? 'bg-gray-800' : 'bg-yellow-100' ">
    <Nav :darkMode='darkMode' :setDarkMode='setDarkMode' :showIndex="showIndex" :setShowIndex='setShowIndex' />
    <!-- 這裡的router-view會抓取Nav當中router-link的連結做為內容輸出 -->
    <router-view :darkMode='darkMode' :setShowIndex='setShowIndex' />
    <Footer :darkMode='darkMode' />
  </div>
  <div class="backCircle"></div>
</template>

<script>
import Nav from './outerComponents/Nav.vue'
import Footer from './outerComponents/Footer.vue'
import { ref } from 'vue'
import { useState } from './composables/state.js'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  setup() {
    const [darkMode, setDarkMode] = useState(false)
    const [showIndex, setShowIndex] = useState(false)

    return { darkMode, setDarkMode, showIndex, setShowIndex }
  }
}
</script>
