import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User:null,
    projectList: [
      {
        'name':'project 1',
        'id':'1',
        'icon':'mdi-earth'
      },
      {
        'name':'project 2',
        'id':'2',
        'icon':'mdi-earth'
      },
      {
        'name':'project 3',
        'id':'3',
        'icon':'mdi-earth'
      },
      {
        'name':'project 4',
        'id':'4',
        'icon':'mdi-earth'
      },
      {
        'name':'project 5',
        'id':'5',
        'icon':'mdi-earth'
      },
    ]
  },
  getters: {
    loginState: (state) => {
      return state.User != null
    }
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
