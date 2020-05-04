require('./bootstrap');

import Vue from 'vue'
import App from "./App.vue"
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import axios from 'axios'

Vue.use(VueRouter)
Vue.config.productionTip = false;

Vue.prototype.$http = axios;

const app = new Vue({
    render: h => h(App),
    router, store
}).$mount('#app');
