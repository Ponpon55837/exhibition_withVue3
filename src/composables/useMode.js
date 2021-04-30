import { useStore } from 'vuex'
import { computed } from 'vue'

const useMode = () => {
    const store = useStore()

    const mode = computed(() => store.state.darkMode)
    const setMode = () => store.commit("SET_LOAD_MODE")

    const initialUrl = store.state.url

    const loadState = computed(() => store.state.loadCheck)
    const setLoadState = () => store.commit("SET_LOAD_CHECK")

    return { mode, setMode, initialUrl, loadState, setLoadState }
}

export default useMode