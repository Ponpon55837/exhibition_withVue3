import { createStore } from "vuex" 

const SET_LOAD_MODE = 'SET_LOAD_MODE'
const SET_LOAD_URL = 'SET_LOAD_URL'
const SET_LOAD_CHECK = 'SET_LOAD_CHECK'

const store = createStore({
  state () {
    return {
      darkMode: false,
      url: `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`,
      loadCheck: true,
    }
  },
  mutations: { 
    [SET_LOAD_MODE] (state) { 
      state.darkMode = !state.darkMode
    },
    [SET_LOAD_URL] (state, initUrl) {
      state.url = initUrl
    },
    [SET_LOAD_CHECK] (state) { 
      state.loadCheck = !state.loadCheck
    },
  } 
})

export default store