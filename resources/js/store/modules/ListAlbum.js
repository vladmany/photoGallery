let state = {
    albums: [],
    album:{},
    groups: {},
    selectAllAlbums: false,
}
let getters = {
    albums: state => {
        if(!state.albums) {
            return JSON.parse(localStorage.getItem('albums'))
        }

        return state.albums
    },
    groups: state => state.groups,
    selectAllAlbums: state => state.selectAllAlbums,
    album: (state, getters) => id =>
        getters.albums.find(album => album.id === id)
    ,
    photosByAlbum: (state, getters) => id => {
        let album = getters.album(id);
        if (album) {
            return album.photos;
        }
        return false;
    }
}
let mutations = {
    getAlbums:(state, payload) => {
        state.albums = payload;
        localStorage.setItem('albums', JSON.stringify(payload))
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
