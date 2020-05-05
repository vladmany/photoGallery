const state: {
    photos: [],
        groups: {}
},
const getters: {
    photos: state => state.photos,
        groups: state => state.groups,
},
const mutations: {
    getPhotos:(state, payload) => {
        state.photos = payload
    },
        makeGroups: (state, payload) => {
        state.groups = payload;
    }
},
const actions: {
    addPhoto: payload => {
        axios.post('api/photos', {
            photo: payload.photo,
        }).then(res => {
            console.log(res.data)
        })
    },
        getPhotos: context => {
        axios.get('api/all-photos')
            .then(res => {
                context.commit('getPhotos', res.data)
            })
    },
        makeGroups: (context, array) => {
        groups = {};
        key = 'created_at';
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
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}