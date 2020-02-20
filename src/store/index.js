import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: []
  },
  mutations: {
    setPeople(state, payload) {
      state.people = payload
    }
  },

  getters: {
    getPeople: (state) => {
      return state.people
    }
  },
  modules: {
  },
})
