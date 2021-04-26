<template>
  <div 
    class="box-border" 
    :class="mode ? 'bg-gray-800' : 'bg-yellow-100' ">
    <Nav 
      :darkMode='mode' 
      :setDarkMode='setMode' />
    <!-- 這裡的router-view會抓取Nav當中router-link的連結做為內容輸出 -->
    <router-view :darkMode='mode' />
    <Footer :darkMode='mode' />
  </div>
  <div class="backCircle"></div>
</template>

<script>
import Nav from './outerComponents/Nav.vue'
import Footer from './outerComponents/Footer.vue'
import { ref, computed } from 'vue'
import { useState } from './composables/state.js'
import { useStore } from "vuex"

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  setup() {
    const [darkMode, setDarkMode] = useState(false)

    const store = useStore()
    const mode = computed(() => store.state.darkMode)
    const setMode = () => store.commit("loadMode")

    return { mode, setMode, darkMode, setDarkMode }
  }
}
</script>
