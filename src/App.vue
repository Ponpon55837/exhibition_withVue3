<template>
  <div 
    class="box-border" 
    :class="mode ? 'bg-gray-800' : 'bg-yellow-100' ">
    <Nav />
    <!-- 這裡的router-view會抓取Nav當中router-link的連結做為內容輸出 -->
    <router-view />
    <Footer />
  </div>
  <div class="backCircle"></div>
</template>

<script>
import Nav from './outerComponents/Nav.vue'
import Footer from './outerComponents/Footer.vue'
import { ref, computed } from 'vue'
import { useState } from './composables/state.js'
import useMode from './composables/useMode'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  setup() {
    const { mode } = useMode()

    return { mode }
  }
}
</script>
