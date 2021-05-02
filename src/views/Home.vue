<template>
  <div class='container'>
    <div class="m-3">
      <input
        class="
        p-1 border rounded-md 
        placeholder-opacity-50 placeholder-gray-500"
        :class="mode ? 'border-blue-800': 'border-yellow-300'"
        type="text"
        v-model="search"
        placeholder="搜尋展覽名稱" />
      <button
        class="
          mx-2 p-1 
          transition duration-700 ease-in-out transform 
          rounded-xl scale-90 hover:scale-100"
        :class="mode ? 'bg-gray-300 hover:bg-gray-500': 'bg-yellow-600 hover:bg-yellow-300'"
        type="button"
        title="clear input"
        @click="search= ''">
        Clear
      </button>
    </div>
    <div
      class="
        lg:mx-10 lg:shadow-2xl lg:border lg:rounded-xl
        inline-grid grid-cols-1
        object-contain
        xl:grid-cols-3
        md:grid-cols-2
        xs:grid-cols-1"
      :class="mode ? 'border-gray-700': ''"
      v-if="matchContent">
      <div 
        v-for="exhi in matchContent" 
        :key="exhi.UID">
        <SingleExhi :exhi="exhi" />
      </div>
    </div>
    <div 
      v-if="matchContent.length" 
      class="text-center">
      <button
        class="
          rounded-full 
          px-10 py-3 m-5 
          font-bold 
          transition duration-700 ease-in-out 
          transform scale-90 hover:scale-100
          ring-4 ring-inset"
        :class="mode ? 'bg-gray-300 ring-gray-400' : 'bg-yellow-500 ring-yellow-400' " 
        @click="setAddArr(addArr+5)">
          More 
        </button>
    </div>
    <div 
      v-if="!matchContent.length && search === '' && loadState" 
      class="flex">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        aria-hidden="true" role="img" 
        class="iconify iconify--mdi animate-spin flex-grow my-5" 
        :class="mode ? 'text-blue-800' :  'text-yellow-800'" 
        fill="none" 
        width="64" 
        height="64" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 24 24">
        <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" fill="currentColor"></path>
      </svg>
    </div>
    <div 
      v-if="!matchContent.length && search !== ''" 
      class="text-center">
      沒有搜尋到相應的結果...
    </div>
    <div v-if="error" class="text-center">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, computed } from 'vue'
import { useState } from '../composables/state.js'
import getData from '../composables/getData.js'
import useMode from '../composables/useMode.js'
import SingleExhi from './SingleExhi.vue'

export default {
  name: 'Home',
  components: { SingleExhi },
  setup() {
    const { store, mode, initialUrl, loadState } = useMode()
    const { originData, error, jsonHandler } = getData()
    const search = ref('')
    const [addArr, setAddArr] = useState(10)

    watchEffect(() => {
      jsonHandler(initialUrl)
    })

    const matchContent = computed(() => {
      return originData.value
        .filter(item => item.title.includes(search.value) || 
                        item.masterUnit.includes(search.value) || 
                        item.showUnit.includes(search.value))
        .sort((x, y) => x.endDate > y.endDate)
        .splice(0, addArr.value)
    })

    return { search, matchContent, addArr, setAddArr, error, mode, loadState }
  }
}
</script>
