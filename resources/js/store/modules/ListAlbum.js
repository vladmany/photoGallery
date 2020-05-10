let state = {
    albums: [],
}
let getters = {
    albums: state => state.albums,
}
let mutations = {
    getAlbums:(state, payload) => {
        state.albums = payload
    },
}
let actions = {
    getAlbums({ commit }) {
        axios.get('api/albums')
            .then(res => {
                commit('getAlbums', res.data)
            })
    },
    getPhotoByAlbum({ commit }) {

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
