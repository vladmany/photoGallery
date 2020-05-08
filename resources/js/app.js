require('./bootstrap');

import Vue from 'vue'
import App from "./App.vue"
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import axios from 'axios'

Vue.use(VueRouter)

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

const app = new Vue({
    render: h => h(App),
    store, router
}).$mount('#app');
