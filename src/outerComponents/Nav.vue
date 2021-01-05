<template>
  <div id="nav" class="flex" @scroll='handleScroll' :class="{ opacityReduce: active }">
    <button class="rounded-md p-4 m-3 w-20" type="button" :class="darkMode ? 'bg-gray-900': 'bg-gray-100'" @click="setDarkMode(!darkMode)">{{ !darkMode ? 'Light' : 'Dark' }}</button>
    <h1 class="">文化部展覽資訊</h1>
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
