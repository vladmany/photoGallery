import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isUploadError: false,
        UploadErrorMessages: [],
        UploadErrorFiles: [],
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
        setUploadErrorMessages(state, data) {
            state.UploadErrorMessages = data
        },
        setUploadErrorFiles(state, data) {
            state.UploadErrorFiles = data
        }
    },
    actions: {

    }
})
