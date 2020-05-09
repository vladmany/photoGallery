let state = {
    photos: [],
    groups: {},
}
let getters = {
    photos: state => state.photos,
    groups: state => state.groups,
    photo: state => id =>
        state.photos.find(photo => photo.id === id)
}
let mutations = {
    getPhotos:(state, payload) => {
        state.photos = payload
    },
    makeGroups:(state, payload) => {
        state.groups = payload
    }
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

        console.log(groups);
        commit('makeGroups', groups);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
