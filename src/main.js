import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase'

import Chat from 'vue-beautiful-chat'


Vue.use(Chat)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),

  created () {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        // store.dispatch('autoSignIn', firebaseUser)
      }
    })
  }
}).$mount('#app')

