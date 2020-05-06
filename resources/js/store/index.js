import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isUploadError: false,
        UploadErrorMessage: '',
        UploadErrorFile: '',
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
