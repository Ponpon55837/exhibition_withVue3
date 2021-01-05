<template>
  <div class="shadow-md hover:shadow-lg m-5 md:m-3 sm:m-0">
    <div class='w-100 lg:w-100 md:w-full sm:w-full xs:w-full group p-5 justify-start' :class="darkMode ? 'bg-gray-400': 'bg-gray-200'">
      <h2 class="font-bold text-lg md:text-md mb-3">{{ exhi.title }}</h2>
      <p>{{ snippet }}</p><br />
      <label class="rounded-full p-2" :class="darkMode ? 'bg-gray-500': 'bg-blue-300' ">{{ exhi.masterUnit[0] ? exhi.masterUnit[0] : '未記錄' }}</label>
    </div>
    <div class="w-100 md:w-auto group p-5 justify-start" :class="darkMode ? 'bg-blue-400': 'bg-blue-200'">
      開始時間：{{ exhi.showInfo[0].time }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'SingleExhi',
  props: ['exhi', 'darkMode'],
  setup(props) {
    const snippet = computed(() => {
      return props.exhi.descriptionFilterHtml.substring(0, 100) + '...'
    })
    return { snippet }
  }
}
</script>
