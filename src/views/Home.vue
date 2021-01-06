<template>
  <div class='container'>
    <div class="m-3">
      <input class="p-1 border rounded-md placeholder-opacity-50 placeholder-gray-500" :class="darkMode ? 'border-blue-800': 'border-blue-300'" type="text" v-model="search" placeholder="搜尋展覽名稱" />
      <button class="rounded-full mx-2 p-2" :class="darkMode ? 'bg-gray-300': 'bg-blue-600'" type="button" @click="search= ''">Clear</button>
    </div>

    <div class="inline-grid grid-cols-1 gap-x-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1" v-if="matchContent">
      <div v-for="exhi in matchContent" :key="exhi.UID">
        <SingleExhi :exhi="exhi" :darkMode="darkMode" />
      </div>
    </div>
    <div v-if="matchContent.length" class="text-center">
      <button class="rounded-full px-10 py-3 m-5" :class="darkMode ? 'bg-gray-300' : 'bg-blue-500' " @click="setAddArr(addArr+5)">more information</button>
    </div>
    <div v-if="!matchContent.length && search === ''" class="text-center">
      Loading...
    </div>
    <div v-if="!matchContent.length && search !== ''" class="text-center">
      沒有搜尋到相應的結果...
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, computed } from 'vue'
import { useState } from '../composables/state.js'
import getExhiData from '../composables/getExhiData.js'
import SingleExhi from './SingleExhi.vue'

export default {
  name: 'Home',
  props: ['darkMode'],
  components: { SingleExhi },
  setup() {
    const { exhiData, error, jsonHandler } = getExhiData()
    const search = ref('')
    const [addArr, setAddArr] = useState(10)

    watchEffect(() => {
      jsonHandler()
    })

    const matchContent = computed(() => {
      return exhiData.value.sort((x, y) => x.endDate > y.endDate).filter(item => item.title.includes(search.value) || item.masterUnit.includes(search.value) || item.showUnit.includes(search.value)).splice(0, addArr.value)
    })

    console.log(matchContent)

    return { exhiData, search, matchContent, addArr, setAddArr }
  }
}
</script>
