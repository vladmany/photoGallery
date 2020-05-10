require('./bootstrap');

import Vue from 'vue'
import App from "./App.vue"
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import axios from 'axios'
import Section from "./components/Global/Section";
import VueCarousel from '@chenfengyuan/vue-carousel';
import Paginate from 'vuejs-paginate'


Vue.component('Section', Section);

Vue.component('paginate', Paginate)
Vue.component(VueCarousel.name, VueCarousel);


Vue.use(VueRouter)

Vue.config.devtools = false
Vue.config.debug = false
Vue.config.silent = true


Vue.prototype.$http = axios;
Vue.config.productionTip = false;

const app = new Vue({
    render: h => h(App),
    store, router
}).$mount('#app');
