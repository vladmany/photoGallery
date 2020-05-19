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
import JwPagination from 'jw-vue-pagination';
import Toasted from 'vue-toasted';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
    componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

loadProgressBar()

Vue.use(Toasted)

Vue.component('Section', Section);

Vue.component('jw-pagination', JwPagination);
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
