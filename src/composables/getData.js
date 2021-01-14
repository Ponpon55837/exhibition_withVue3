import { ref } from 'vue'

const getData = () => {
  const originData = ref([])
  const error = ref(null)
  const jsonHandler = async (url) => {
    try {
      const res = await fetch(url)
      const result = await res.json()
      return originData.value = result
    } catch (err) {
      return error.value = err.message
    }
  }
  // 這裡return的原因是因為為了在被使用時，可以用解構的方式呼叫
  return { originData, error, jsonHandler }
}

export default getData
