import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import router from './router/index.js'
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; //   Vuesax styles
import './css/style.css'
import store from './store/index.js'
import 'boxicons/dist/boxicons'

Vue.use(Vuex) 
Vue.use(Vuesax, {
  primary: '#037367',
  secondary: '#00281f',
  accent: '#4a7eb3',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
});

sync(store, router)
 
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})