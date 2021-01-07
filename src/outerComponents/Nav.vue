<template>
  <div id="nav" class="flex grid grid-cols-1 md:grid-cols-2" @scroll='handleScroll' :class="darkMode ? 'bg-gray-900': 'bg-blue-300' ">
    <div class="text-left">
      <router-link :to="{ name: 'Home', params: {} }" title="回首頁">
        <h1 class="text-4xl font-bold pt-6 pl-3" :class="darkMode ?'text-gray-300' : ''">文化部展覽資訊</h1>
      </router-link>
    </div>
    <div class="lg:text-right md:text-left">
      <button class="rounded-md p-1 ml-3 mt-5 mb-1 mr-5 w-20 border font-medium" type="button" :class="darkMode ? 'bg-gray-900 border-gray-500 text-gray-300': 'bg-gray-100 border-blue-900'" @click="setDarkMode(!darkMode)">{{ !darkMode ? 'Light' : 'Dark' }}</button>
    </div>
  </div>
  <div class="fixed right-5 bottom-5 p-2 rounded-full font-bold opacity-50 hover:opacity-100" :class="darkMode ? 'bg-blue-300': 'bg-gray-300'" @click="jumpTop">
    <span>Top</span>
  </div>
</template>

<script>
export default {
  props: ['darkMode', 'setDarkMode'],
  setup() {
    const jumpTop = () => window.scrollTo(0, 0)

    return { jumpTop }
  }
}
</script>
