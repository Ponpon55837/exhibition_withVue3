import { ref } from 'vue'

const getExhiData = () => {
  const exhiData = ref([])
  const error = ref(null)
  const jsonHandler = async () => {
    try {
      const response = await fetch(`https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`);
      const result = await response.json()
      console.log(result)
      return exhiData.value = result
    } catch (err) {
      return error.value = err.message
    }
  }
  // 這裡return的原因是因為為了在被使用時，可以用解構的方式呼叫
  return { exhiData, error, jsonHandler }
}

export default getExhiData
