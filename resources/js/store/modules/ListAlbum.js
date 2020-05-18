let state = {
    albums: [],
    album:{},
    groups: {},
    selectAllAlbums: false,
    searchString: "",
}
let getters = {
    albums: state => {
        if(!state.albums) {
            return JSON.parse(localStorage.getItem('albums'))
        }
        let searchString = state.searchString;

        searchString = searchString.trim().toLowerCase();

        state.albums = state.albums.filter(function(item){
            if(item.name.toLowerCase().indexOf(searchString) !== -1){
                return item;
            }
        })



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

    searchString:(state, payload) =>
        state.searchString = payload,

    selectAllAlbums:(state, payload) =>
        state.selectAllAlbums = payload,
    selectSearchString:(state, payload) =>
        state.searchString = payload
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
