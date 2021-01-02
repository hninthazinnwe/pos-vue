import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
import Vuesax from 'vuesax';
import vuesax from 'vuesax/dist/vuesax.css'; //   Vuesax styles

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuesax, {vuesax});
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')