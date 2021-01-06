<template>
  <div id="nav" class="flex" @scroll='handleScroll' :class="{ opacityReduce: active }">
    <router-link :to="{ name: 'Home', params: {} }" title="回首頁">
      <h1 class="text-4xl font-bold pt-6 pl-3">文化部展覽資訊</h1>
    </router-link>
    <button class="rounded-md p-1 ml-3 mt-5 mb-1 w-20" type="button" :class="darkMode ? 'bg-gray-900': 'bg-gray-100'" @click="setDarkMode(!darkMode)">{{ !darkMode ? 'Light' : 'Dark' }}</button>
  </div>
</template>

<script>
export default {
  props: ['darkMode', 'setDarkMode'],
  data() {
    return {
      active: false
    }
  },
  created() {
      window.addEventListener("scroll", this.handleScroll);
    },
  methods: {
    handleScroll() {
      this.active = window.scrollY > 20 ? true : false
    }
  }
}
</script>
