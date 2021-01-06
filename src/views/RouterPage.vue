<template>
  <div class='flex max-w-full justify-center' :class="darkMode ? 'bg-gray-400' : 'bg-gray-200' ">
    <div class="max-w-4xl shadow-lg hover:shadow-2xl border rounded-xl my-10 p-5">
      <h2 class="text-center mb-2 p-3 text-2xl font-bold rounded" :class="darkMode ? 'bg-gray-600 text-gray-300':'bg-blue-200' ">{{ title }}</h2>
      <p class="text-xl mb-3 whitespace-pre-wrap break-all">{{ des }}</p>
      <p v-if="showUnit" class="mb-3">主辦單位： {{ showUnit }}</p>
      <p v-if="location" class="mb-3">活動地點： {{ location }}</p>
      <p v-if="time" class="mb-3">開始時間： {{ time }}</p>
      <p v-if="endDate" class="mb-3">結束時間： {{ endDate }}</p>
      <p v-if="sourceWebName" class="">購票單位：<a class="font-bold" :href="sourceWebPromote" :title="sourceWebName" target="_blank">{{ sourceWebName }}</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterPage',
  props: ['darkMode', 'id', 'title', 'des', 'time', 'location', 'showUnit', 'sourceWebName', 'sourceWebPromote', 'startDate', 'endDate', 'discountInfo'],
}
</script>
