<template>
  <div 
    id="nav" 
    class="grid grid-cols-1 md:grid-cols-2" 
    @scroll='handleScroll' :class="mode ? 'bg-gray-900': 'bg-yellow-300' ">
    <div class="text-left">
      <router-link 
        :to="{ name: 'Home', params: {} }" 
        title="回首頁">
        <h1 
          class="text-4xl font-bold pt-6 pl-3" 
          :class="mode ?'text-gray-300' : 'text-gray-800'">
          文化部展覽資訊
        </h1>
      </router-link>
    </div>
    <div class="
      md:text-right 
      sm:text-left">
      <router-link :to="{ name: 'Home', params: {} }" title="回首頁">
        <button 
          v-if="$route.path !== '/' " 
          class="
            rounded-md w-20 border font-medium
            p-1 ml-3 mt-5 mb-1 mr-1" 
          type="button" 
          :class="mode ? 'bg-gray-900 border-gray-500 text-gray-300': 'bg-yellow-100 border-blue-900'">
          首頁
        </button>
      </router-link>
      <button 
        class="
          rounded-md border font-medium
          p-1 ml-2 mt-5 mb-1 mr-5 w-20 " 
        type="button" 
        :class="mode ? 'bg-gray-900 border-gray-500 text-gray-300 hover:bg-gray-700': 'bg-yellow-100 border-blue-900 hover:bg-yellow-300'"
        @click="setMode()">
        {{ !mode ? 'Light' : 'Dark' }}
      </button>
    </div>
  </div>
  <div 
    class="
      right-5 bottom-5 p-2 
      rounded-full font-bold fixed cursor-pointer z-10
      border-4 border-double 
      opacity-50 hover:opacity-100 
      transition duration-700 ease-in-out 
      transform scale-90 hover:scale-100" 
    :class="mode ? 'bg-blue-300 border-blue-400': 'bg-yellow-300 border-yellow-500'" 
    @click="jumpTop">
    <span>Top</span>
  </div>
</template>

<script setup>
import useMode from '../composables/useMode.js'

const jumpTop = () => window.scrollTo(0, 0)
const { mode, setMode } = useMode()
</script>
