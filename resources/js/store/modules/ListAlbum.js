let state = {
    albums: [],
    album:{},
    groups: {},

}
let getters = {
    albums: state => state.albums,
    groups: state => state.groups,
    album: state => id =>
        state.albums.find(album => album.id === id),
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
        state.albums = payload
    },
    makeGroups:(state, payload) => {
        state.groups = payload
    }
}
let actions = {
    getAlbums({ commit }) {
        axios.get('/api/all-albums')
            .then(res => {
                commit('getAlbums', res.data)
            })
    },
    makeGroups({ state, commit }, items) {
        let weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб',];
        let months = [
            'января', 'февраля', 'марта', 'апреля',
            'мая', 'июня', 'июля', 'августа',
            'сентября', 'октября', 'ноября', 'декабря',
        ];

        let groups = {};
        let key = 'created_at';
        items.forEach(item => {
            let val = item[key].split('T')[0];
            let date = new Date(val);
            let weekday = weekdays[date.getDay()];
            let month = months[date.getMonth()];
            let ret = `${weekday}, ${date.getDate()} ${month}`;
            if (!groups[ret]){
                groups[ret] = []
            }
            groups[ret].push(item)
        });

        let keys = Object.keys(groups);
        // keys.reverse();
        let desc_groups = {};

        for(key of keys) {
            desc_groups[key] = groups[key];
        }

        commit('makeGroups', desc_groups);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
