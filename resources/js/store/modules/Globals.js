let state = {
    selected: {
        photos: [], // добавлять id
        albums: []  // добавлять id
    },
}
let getters = {
    selectedPhotos: (state) => state.selected.photos,
    selectedAlbums: (state) => state.selected.albums,
}
let mutations = {
    addPhoto:(state, val) =>
        state.selected.photos.push(val),
    delPhoto:(state, val) => {
        for(let i=0; i<state.selected.photos.length; i++) {
            if (state.selected.photos[i] === val) {
                state.selected.photos.splice(i, 1);
                return true
            }
        }
        return false
    },
    clearPhotos:(state) => {
        state.selected.photos = []
    },
    addAlbum:(state, val) =>
        state.selected.albums.push(val),
    delAlbum:(state, val) => {
        for(let i=0; i<state.selected.albums.length; i++) {
            if (state.selected.albums[i] === val) {
                state.selected.albums.splice(i, 1);
                return true
            }
        }
        return false
    },
    clearAlbums:(state) => {
        state.selected.albums = []
    },
    clearSelectedPhotos:(state) => {
        state.selected.photos = [];
    },
    // clearSelectedAlbums:(state) => {
    //     state.selected.albums = [];
    // }

}
let actions = {
    addPhoto({ commit }, val) {
        commit('addPhoto', val)
    },
    delPhoto({ commit }, val) {
        commit('delPhoto', val)
    },
    clearPhotos({ commit }) {
      commit('clearPhotos')
    },
    addAlbum({ commit }, val) {
        commit('addAlbum', val)
    },
    delAlbum({ commit }, val) {
        commit('delAlbum', val)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}