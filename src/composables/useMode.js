import { useStore } from 'vuex'
import { computed } from 'vue'

const useMode = () => {
    const store = useStore()
    const mode = computed(() =>store.state.darkMode)
    const setMode = () => store.commit("SET_LOAD_MODE")
    const initialUrl = store.state.url

    return { mode, setMode, initialUrl }
}

export default useMode