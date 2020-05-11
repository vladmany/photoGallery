let state = {
    albums: [],
    album:{},

}
let getters = {
    albums: state => state.albums,
    album: state => id =>
        state.albums.find(album => album.id === id),
}
let mutations = {
    getAlbums:(state, payload) => {
        state.albums = payload
    },
}
let actions = {
    getAlbums({ commit }) {
        axios.get('api/all-albums')
            .then(res => {
                commit('getAlbums', res.data)
            })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
