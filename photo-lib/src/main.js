import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import * as firebase from 'firebase'
import store from './store'

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBbZuwBYe_dLlGaC03khc-u64VRbAIV_6A',
      authDomain: 'phototop-14ccd.firebaseapp.com',
      databaseURL: 'https://phototop-14ccd.firebaseio.com',
      projectId: 'phototop-14ccd',
      storageBucket: 'phototop-14ccd.appspot.com',
      messagingSenderId: '853675311253',
      appId: '1:853675311253:web:7457b38c4e26734b'
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchPosts')
}
}).$mount('#app')
