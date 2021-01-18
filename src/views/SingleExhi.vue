<template>
  <div class="shadow-md hover:shadow-lg m-5 md:m-3 sm:m-0 transition duration-700 ease-in-out transform scale-95 hover:scale-100">
    <div class='w-100 lg:w-100 md:w-full sm:w-full xs:w-full group p-5 justify-start' :class="darkMode ? 'bg-gray-400': 'bg-yellow-100'">
      <router-link :to="{
        name: 'RouterPage',
        params: {
          id: exhi.UID,
          title: exhi.title,
          des: exhi.descriptionFilterHtml,
          time: temp.time,
          location: temp.location,
          showUnit: exhi.showUnit,
          sourceWebName: exhi.sourceWebName,
          sourceWebPromote: exhi.sourceWebPromote,
          startDate: exhi.startDate,
          endDate: exhi.endDate,
          discountInfo: exhi.discountInfo,
          imageUrl: exhi.imageUrl
        }
      }" :title="exhi.title">
        <h2 class="font-bold text-lg md:text-md mb-3">{{ exhi.title }}</h2>
        <img v-if="exhi.imageUrl" :src="exhi.imageUrl" :alt="exhi.title的圖片" class="mb-4 rounded opacity-80 hover:opacity-100 transition duration-300 w-60 h-auto" />
        <p class="text-sm">{{ snippet }}</p><br />
        <label class="font-bold float-right" :class="darkMode ? 'hover:text-blue-600': 'hover:text-red-300' " @click="jumpTop">閱讀更多</label>
      </router-link><br /><br />
      <label class="rounded-md p-2 mr-2" :class="darkMode ? 'bg-gray-500 text-purple-300': 'bg-yellow-300' ">#{{ exhi.showInfo[0].onSales === 'Y' ? "售票中" : "暫未售票" }}</label>
      <label class="rounded-md p-2 mr-2" :class="darkMode ? 'bg-gray-500 text-indigo-300': 'bg-yellow-300' ">#{{ exhi.masterUnit[0] ? exhi.masterUnit[0] : '未記錄' }}</label>
    </div>
    <div class="w-100 md:w-auto group p-5 justify-start" :class="darkMode ? 'bg-blue-400': 'bg-yellow-200'">
      開始時間：{{ exhi.showInfo[0].time }} <br />
      結束時間：{{ exhi.endDate }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import RouterPage from './RouterPage.vue'

export default {
  name: 'SingleExhi',
  props: ['exhi', 'darkMode'],
  components: { RouterPage },
  setup(props) {
    const temp = props.exhi.showInfo[0]
    const snippet = computed(() => {
      return props.exhi.descriptionFilterHtml.substring(0, 100) + '......'
    })

    const jumpTop = () => window.scrollTo(0, 0)

    return { snippet, temp, jumpTop }
  }
}
</script>
