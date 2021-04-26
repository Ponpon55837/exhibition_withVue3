import { createStore } from "vuex" 

const store = createStore({
  state () {
    return {
      darkMode: false,
    }
  },
  mutations: { 
    loadMode (state) { 
      state.darkMode = !state.darkMode
    }
  } 
})

export default store