import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

//firebase setting
import { initializeApp } from '@firebase/app'
import { onAuthStateChanged, getAuth, Auth } from '@firebase/auth'

initializeApp({
  apiKey: 'AIzaSyAQvsOpcxcbCkCT8u8GQnfDcRi_2OKZ_94',
  authDomain: 'hackathon-gorupdev-tool.firebaseapp.com'
})
const auth:Auth = getAuth();
onAuthStateChanged(auth,(user) => {
  store.commit('setUser', user)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
