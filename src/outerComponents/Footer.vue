<template>
  <div class='mx-0 overflow-hidden' :class="mode ? 'bg-gray-900': 'bg-yellow-300' ">
    <div class="md:container md:mx-auto py-4 text-center font-bold" :class="mode ? 'text-gray-300' : 'text-yellow-500' ">
      <a href="https://github.com/Ponpon55837" target="_blank" title="link to Upfloor5's github">make by upfloor5</a>
    </div>
  </div>
</template>

<script setup>
import useMode from '../composables/useMode.js'

const { mode } = useMode()
</script>
