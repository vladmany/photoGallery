const state = {
    photos: [],
    groups: {},
}
const getters = {
    photos: state => state.photos,
    groups: state => state.groups,
}
const mutations = {
    getPhotos:(state, payload) => {
        state.photos = payload
    },
    makeGroups: (state, payload) => {
        state.groups = payload;
    }
}
const actions = {
    addPhoto: payload => {
        axios.post('index.php/api/all-photos', {
            photo: payload.photo,
        }).then(res => {
            console.log(res.data)
        })
    },
    getPhotos: context => {
        axios.get('index.php/api/all-photos')
            .then(res => {
                context.commit('getPhotos', res.data)
            })
    },
    makeGroups: (context, array) => {
        let groups = {};
        let key = 'created_at';
        array.forEach(item => {
            if (!groups[item[key]]){
                groups[item[key]] = []
            }
            groups[item[key]].push(item)
        });
        context.commit(array)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}