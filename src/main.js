import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyDQ2kNy16XQnScyIgXlqMwlRzOkhydtn8Q",
  authDomain: "medical-ward.firebaseapp.com",
  databaseURL: "https://medical-ward.firebaseio.com",
  projectId: "medical-ward",
  storageBucket: "medical-ward.appspot.com",
  messagingSenderId: "289760404357",
  appId: "1:289760404357:web:ee14f09582d2b55ba31aec",
  measurementId: "G-0RFQ2CQ693"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
