import { createStore } from "vuex";

const store = createStore({
  state(){
    return {
      counter: 0
    }
  } ,
  mutations: {
    increment(state) {
      state.counter++
    }
  }
})

export default store