import Vue from 'vue'
import Vuex from 'vuex'
import AddPhoto from './modules/AddPhoto'
import ListPhoto from './modules/ListPhoto'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        AddPhoto,
        ListPhoto
    },
    state: {
        isUploadError: false,
        UploadErrorMessage: [],
        UploadErrorFile: [],
    },
    getters: {

    },
    mutations: {
        showUploadError(state) {
            state.isUploadError = true
        },
        hideUploadError(state) {
            state.isUploadError = false
        },
        setUploadErrorMessage(state, data) {
            state.UploadErrorMessage = data
        },
        setUploadErrorFile(state, data) {
            state.UploadErrorFile = data
        }
    },
    actions: {

    }
})
