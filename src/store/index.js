import { createStore } from "vuex" 

const store = createStore({
  state () {
    return {
      darkMode: true,
    }
  },
  mutations: { 
    loadMode (state) { 
      !state.darkMode
      console.log(!state.darkMode)
    }
  } 
})

export default store