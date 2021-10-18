import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User:null
  },
  mutations: {
    setUser(state, user) {
      state.User = user
    },
    deleteUser(state) {
      state.User = null
    }
  },
  actions: {
  },
  modules: {
  }
})
