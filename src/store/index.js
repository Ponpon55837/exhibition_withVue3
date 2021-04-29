import { createStore } from "vuex" 

const SET_LOAD_MODE = 'SET_LOAD_MODE'

const store = createStore({
  state () {
    return {
      darkMode: false,
      url: `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`,
    }
  },
  mutations: { 
    [SET_LOAD_MODE] (state) { 
      state.darkMode = !state.darkMode
    },
  } 
})

export default store