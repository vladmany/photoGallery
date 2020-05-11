let state = {
    albums: [],
    album:{}
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
    addPhoto: payload => {
        axios.post('api/all-photos', {
            photo: payload.photo,
        }).then(res => {
            console.log(res.data)
        })
    },
    getPhotos({ commit }) {
        axios.get('api/all-photos')
            .then(res => {
                commit('getPhotos', res.data)
            })
    },
    getAlbums({ commit }) {
        axios.get('api/all-albums')
            .then(res => {
                commit('getAlbums', res.data)
            })
    },
    makeGroups({ state, commit }) {
        let weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб',];
        let months = [
            'января', 'февраля', 'марта', 'апреля',
            'мая', 'июня', 'июля', 'августа',
            'сентября', 'октября', 'ноября', 'декабря',
        ];

        let groups = {};
        let key = 'created_at';
        state.photos.forEach(item => {
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
        keys.reverse();
        let desc_groups = {};

        for(key of keys) {
            desc_groups[key] = groups[key];
        }

        commit('makeGroups', desc_groups);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
