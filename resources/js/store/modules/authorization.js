let state = {
    user: {},
}
let getters = {
    user: state => state.user,
}
let mutations = {
    getUser:(state, payload) => {
        state.user = payload
    },
}
let actions = {
    getUser({ commit }) {
        axios.get('/api/get-user')
            .then(res => {
                commit('getUser', res.data)
            })
    },
    logout({ commit, state }) {
        axios.post('/api/dead-session', {})
            .then(res => {
                console.log(res.data)
            })

        // axios.get('https://team1-group-project.azurewebsites.net/api/client_logout', {
        //         headers: { Authorization: "Bearer " + state.user.token }
        //     }).then(r => location.href= r.data)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}


