import Vue from "vue";

let state = {
    isPhotoOpen: false,
    selected: {
        photos: [], // добавлять id
        albums: []  // добавлять id
    },
    correctPhotoId: 0,
}
let getters = {
    selectedPhotos: (state) => state.selected.photos,
    selectedAlbums: (state) => state.selected.albums,
    correctPhotoId: (state) => state.correctPhotoId,
    isSelectedAlbum: (state, getters) => id => {
        return getters.selectedAlbums.includes(id);
    },
}
let mutations = {
    addPhoto:(state, val) => {
        state.selected.photos.push(val)
        state.correctPhotoId = val
    },
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
    setCorrectPhotoId: (state, payload) => {
        state.correctPhotoId = payload
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
    clearAlbums({ commit }) {
        commit('clearAlbums')
    },
    addAlbum({ commit }, val) {
        commit('addAlbum', val)
    },
    delAlbum({ commit }, val) {
        commit('delAlbum', val)
    },
    showToasted({}, payload) {
        let text = payload.text;
        let action = payload.action || {};
        Vue.toasted.show(text, {
            action : action,
            position: 'bottom-left',
            duration: 5000,
            keepOnHover: true
        });
    },
    setCorrectPhotoId({ commit, getters }, ) {
        if(getters.selectedPhotos.length === 1) {
            let id = getters.selectedPhotos[0];
            commit('setCorrectPhotoId', id)
        }

    },
    changeCorrectPhotoId({ commit, getters }, id) {
        commit('setCorrectPhotoId', id)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}

