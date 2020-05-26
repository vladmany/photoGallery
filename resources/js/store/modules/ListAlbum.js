let state = {
    albums: [],
    album:{},
    groups: {},
    selectAllAlbums: false,
    searchString: "",
    countAlbums: 0,
    downUp: { v: 0 },
}
let getters = {
    albums: state => {
        if(!state.albums) {
            return JSON.parse(localStorage.getItem('albums'))
        }
        let searchString = state.searchString;

         searchString = searchString.trim().toLowerCase();
       /* if(!searchString){
            return state.albums
        }*/
        let arr=state.albums;
        state.countAlbums = state.albums.length;
        arr = state.albums.filter(function(item){
             if(item.name.toLowerCase().indexOf(searchString) !== -1){
                 return item;
             }
         })

        console.log('Конец геттера albums '+arr);


        return arr
    },
    countAlbums: state => state.countAlbums,
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
    },
    getSearchStr: state => state.searchString,
    downUp: state => state.downUp,
}
let mutations = {
    getAlbums:(state, payload) => {
        state.albums = payload;
        localStorage.setItem('albums', JSON.stringify(payload))
    },

    setSearchStr: (state, payload) => {
        state.searchString = payload
    },

    selectAllAlbums:(state, payload) =>
        state.selectAllAlbums = payload,

    countAlbumsP(state) {
        state.countAlbums = state.countAlbums + 1
    },
    countAlbumsM(state) {
        state.countAlbums = state.countAlbums - 1
    },
    setDownUp: (state, payload) => {
        state.downUp = payload
    },

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
    setSearchStr:({ commit }, payload) => {
        commit('setSearchStr', payload);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
