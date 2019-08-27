import Vue from 'vue';
import Vuex from 'vuex';
import masterСlasses from './masterClasses';
import sertificates from './sertificates';




Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        masterСlasses,
        sertificates
    }
})