import Vue from 'vue'
import Vuex from 'vuex'
import AddPhoto from './modules/AddPhoto'
import ListPhoto from './modules/ListPhoto'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        AddPhoto,
        ListPhoto
    }
})
