import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import * as firebase from "firebase";

const configOptions = {
  apiKey: "AIzaSyBD8mWbzigZcfOAjeh_qrvWkcs93TZNFgU",
  authDomain: "photo-992f6.firebaseapp.com",
  databaseURL: "https://photo-992f6.firebaseio.com",
  projectId: "photo-992f6",
  storageBucket: "photo-992f6.appspot.com",
  messagingSenderId: "1089724817618",
  appId: "1:1089724817618:web:d647937d634eac20dacd0b",
  measurementId: "G-LYYVP3KK84"
};

firebase.initializeApp(configOptions);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

