import { ref } from 'vue'
import { useState } from './state.js'
import useMode from './useMode.js'
import axios from 'axios'

const getData = (url) => {
  const originData = ref([])
  const [error, setError] = useState(null)

  const { setLoadState } = useMode()

  const jsonHandler = async (url) => {
    // 設定timeout
    axios.defaults.timeout = 10000
    // 使用axios fetch
    await axios.get(url)
    .then(res => {
      return originData.value = res.data
    })
    .catch(err => {
      setLoadState()
      return setError(err.message)
    })

    // 原生 fetch方式
    // try {
    //   const res = await fetch(url)
    //   const result = await res.json()
    //   return originData.value = result
    // } catch (err) {
    //   return error.value = err.message
    // }
  }
  // 這裡return的原因是因為為了在被使用時，可以用解構的方式呼叫
  return { originData, error, jsonHandler }
}

export default getData
