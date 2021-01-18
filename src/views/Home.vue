<template>
  <div class='container'>
    <div class="m-3">
      <input class="p-1 border rounded-md placeholder-opacity-50 placeholder-gray-500" :class="darkMode ? 'border-blue-800': 'border-yellow-300'" type="text" v-model="search" placeholder="搜尋展覽名稱" />
      <button class="rounded-xl mx-2 p-1" :class="darkMode ? 'bg-gray-300': 'bg-yellow-600'" type="button" @click="search= ''">Clear</button>
    </div>

    <div class="inline-grid grid-cols-1 gap-x-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1" v-if="matchContent">
      <div v-for="exhi in matchContent" :key="exhi.UID">
        <SingleExhi :exhi="exhi" :darkMode="darkMode" />
      </div>
    </div>
    <div v-if="matchContent.length" class="text-center">
      <button class="rounded-full px-10 py-3 m-5 font-bold transition duration-50 ease-in-out transform scale-90 hover:scale-100" :class="darkMode ? 'bg-gray-300' : 'bg-yellow-500' " @click="setAddArr(addArr+5)">More </button>
    </div>
    <div v-if="!matchContent.length && search === ''" class="text-center">
      Loading...
    </div>
    <div v-if="!matchContent.length && search !== ''" class="text-center">
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
import SingleExhi from './SingleExhi.vue'

export default {
  name: 'Home',
  props: ['darkMode'],
  components: { SingleExhi },
  setup() {
    const initialUrl = `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`
    const { originData, error, jsonHandler } = getData()
    const search = ref('')
    const [addArr, setAddArr] = useState(10)

    watchEffect(() => {
      jsonHandler(initialUrl)
    })

    const matchContent = computed(() => {
      return originData.value.sort((x, y) => x.endDate > y.endDate).filter(item => item.title.includes(search.value) || item.masterUnit.includes(search.value) || item.showUnit.includes(search.value)).splice(0, addArr.value)
    })

    return { search, matchContent, addArr, setAddArr, error }
  }
}
</script>
