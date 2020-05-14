let state = {
    albums: [],
    album:{},
    groups: {},
    selectAllAlbums: false,
}
let getters = {
    albums: state => state.albums,
    groups: state => state.groups,
    selectAllAlbums: state => state.selectAllAlbums,
    album: state => id =>
        state.albums.find(album => album.id === id),
    photosByAlbum: (state, getters) => id => {
        let album = getters.album(id);
        if (album) {
            let photos = album.photos;
            return photos;
        }
        return false;
    }
}
let mutations = {
    getAlbums:(state, payload) => {
        state.albums = payload
    },
    selectAllAlbums:(state, payload) =>
        state.selectAllAlbums = payload
}
let actions = {
    getAlbums({ commit }) {
        axios.get('/api/all-albums')
            .then(res => {
                commit('getAlbums', res.data)
            })
    },
    selectAllAlbums:({ commit }, isselect) =>
        commit('selectAllAlbums', isselect),
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
