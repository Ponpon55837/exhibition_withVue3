<template>
  <div
    class='flex max-w-full justify-center'
    :class="mode ? 'bg-gray-400' : 'bg-yellow-50' ">
    <div
      class="
        max-w-4xl ounded-xl my-10 p-5
        shadow-lg hover:shadow-2xl 
        md:border md:rounded-md
        xs:border-none"
      :class="mode ? 'border-gray-300': 'border-yellow-200' ">
      <h2
        class="
          text-center text-2xl font-bold 
          mb-2 p-3 rounded" 
        :class="mode ? 'bg-gray-600 text-gray-300':'bg-yellow-300' ">
        {{ title }}
      </h2>
      <img 
        :src="imageUrl" 
        :alt="title + '圖片'" 
        class="rounded-md" />
      <p class="
        text-xl mb-3 
        whitespace-pre-wrap break-all">
        {{ des }}
      </p>
      <p v-if="showUnit" class="mb-3">主辦單位： {{ showUnit }}</p>
      <p v-if="location" class="mb-3">活動地點： {{ location }}</p>
      <p v-if="time" class="mb-3">開始時間： {{ time }}</p>
      <p v-if="endDate" class="mb-3">結束時間： {{ endDate }}</p>
      <p v-if="sourceWebName" class="">
        購票單位：
        <a 
          class="font-bold" 
          :href="sourceWebPromote" 
          title="sourceWebName" 
          target="_blank">
          {{ sourceWebName }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import useMode from '../composables/useMode.js'

export default {
  name: 'RouterPage',
  props: ['id', 'title', 'des', 'time', 'location', 'showUnit', 'sourceWebName', 'sourceWebPromote', 'startDate', 'endDate', 'discountInfo', 'imageUrl'],
  setup() {
    const { mode } = useMode()

    return { mode }
  }
}
</script>
