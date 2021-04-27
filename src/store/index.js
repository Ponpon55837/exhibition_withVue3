import { createStore } from "vuex" 

const SET_LOAD_MODE = 'SET_LOAD_MODE'

const store = createStore({
  state () {
    return {
      darkMode: false,
    }
  },
  mutations: { 
    [SET_LOAD_MODE] (state) { 
      state.darkMode = !state.darkMode
    }
  } 
})

export default store