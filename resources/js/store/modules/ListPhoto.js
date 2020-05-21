let state = {
    photos: [],
    groups: {},
    selectAllPhotos: false,
}
let getters = {
    photos: state => state.photos,
    groups: state => state.groups,
    selectAllPhotos: state => state.selectAllPhotos,
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
    },
    getPhotoIndex: state => (items, id) => {
        let ind = 0;
        for(let item of items) {
            if(item.id === id) {
                break;
            }
            ind++;
        }

        return ind;
    }
}
let mutations = {
    getPhotos:(state, payload) => {
        state.photos = payload
        console.log('загрузить фото')
    },
    makeGroups:(state, payload) => {
        state.groups = payload
    },
    selectAllPhotos:(state, payload) =>
        state.selectAllPhotos = payload,
    clearPhotos: (state) => {
        state.photos = []
        // console.log(state.photos)
        console.log('очистить фото')
    }
}
let actions = {
    addPhoto: payload => {
        axios.post('/api/all-photos', {
            photo: payload.photo,
        }).then(res => {
            console.log(res.data)
        })
    },
    getPhotos({ commit }) {
        // commit('clearPhotos');
        axios.get('/api/all-photos')
            .then(res => {
                commit('getPhotos', res.data);
                console.log('все фото')
            })
    },
    makeGroups({ state, commit }, payload) {
        let items = payload.items;
        let reverse = payload.reverse;
        let weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб',];
        let months = [
            'января', 'февраля', 'марта', 'апреля',
            'мая', 'июня', 'июля', 'августа',
            'сентября', 'октября', 'ноября', 'декабря',
        ];
        let groups = {};
        let key = 'created_at';

        items.sort(
            function( a, b ) {
                if ( a[key] > b[key] ){
                    return -1;
                }
                if ( a[key] < b[key] ){
                    return 1;
                }
                return 0;
        })

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
        let desc_groups = {};

        for(key of keys) {
            desc_groups[key] = groups[key];
        }

        commit('makeGroups', desc_groups);
    },
    selectAllPhotos:({ commit }, isselect) =>
        commit('selectAllPhotos', isselect),
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
