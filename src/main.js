import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import './plugins/vuetify'
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbvue/build/css/mdb.css';
import VueRouter from 'vue-router'
import YmapPlugin from 'vue-yandex-maps'
import Home from "./views/Home";
import Studio from "./views/Studio";
import ChildrenEvents from "./views/ChildrenEvents";
import MasterClassesPage from "./views/MasterClassesPage";
import Festivals from "./views/Festivals";
import Business from "./views/Business";
import Tour from "./views/Tour";
import CartView from "./views/CartView";
import MasterClassDetails from "./views/MasterClassDetails";
import SertificatesPage from "./views/SertificatesPage";

// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)

import store from './store';



Vue.use(YmapPlugin)

Vue.config.productionTip = false


Vue.use(VueRouter);
export const eventBus = new Vue();

const routes = [
    { path: './', component: Home },
    { path: '/', component: Home },
    { path: '/Home/', component: Home },
    { path: '/Studio/', component: Studio },
    { path: '/ChildrenEvents/', component: ChildrenEvents },
    { path: '/MasterClassesPage/', component: MasterClassesPage },
    { path: '/Festivals/', component: Festivals },
    { path: '/Business/', component: Business },
    { path: '/3Dtour/', component: Tour },
    { path: '/CartView/', component: CartView },
    { path: '/MasterClassDetails/', component: MasterClassDetails },
    { path: '/SertificatesPage/', component: SertificatesPage },
]

const router = new VueRouter({
    mode: 'hash',
    routes
});

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App),
}).$mount('#app')