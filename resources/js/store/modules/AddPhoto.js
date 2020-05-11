const state = {
    isUploadError: false,
        UploadErrorMessages: [],
        UploadErrorFiles: [],
}
const getters = {

}
const mutations = {
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
}
const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
