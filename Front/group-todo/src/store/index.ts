import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '../axios'
import { getAuth, Auth, onAuthStateChanged} from '@firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User:null,
    projectList: []
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
    },
    setProject(state, list) {
      state.projectList = list
    }
  },
  actions: {
    projectGet: function(state) {
      const auth: Auth = getAuth()
      onAuthStateChanged(auth,async (user) => {
          const header = {
              'Content-Type': 'application/json',
              'Authorization': ''
          }

          user!.getIdToken()
          .then((token) => {
              header.Authorization = token
              api.get('/projects', {headers: header})
                  .then((res:any) => {
                    console.log(res)
                    state.commit('setProject', res.data)
                  })
                  .catch((e:any) => {
                      console.log(e)
                  })
          })
          
      })
    }
  },
  modules: {
  }
})
