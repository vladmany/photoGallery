let state = {
    photos: [],
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
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
