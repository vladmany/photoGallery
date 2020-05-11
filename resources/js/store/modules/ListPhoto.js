let state = {
    photos: [],
    groups: {},
}
let getters = {
    photos: state => state.photos,
    groups: state => state.groups,
    photo: state => id =>
        state.photos.find(photo => photo.id === id),
    groupByPhoto: state => id => {
        let group = {};
        let ind = 0;
        for(let key of Object.keys(state.groups)) {
            let br = false;
            for(let elem of state.groups[key]) {
                if(elem.id === id) {
                    group = state.groups[key];
                    ind = state.groups[key].indexOf(elem);
                    br = true;
                    break;
                }
            }
            if (br) break;
        }
        let arr = [];
        for(let val of group) {
            arr.push(val.url);
        }

        return [ind, arr];
    }

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
                commit('getPhotos', res.data);
            })
    },
    makeGroups({ state, commit }, items) {
        let weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб',];
        let months = [
            'января', 'февраля', 'марта', 'апреля',
            'мая', 'июня', 'июля', 'августа',
            'сентября', 'октября', 'ноября', 'декабря',
        ];
        if(!items) items = state.photos;
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
