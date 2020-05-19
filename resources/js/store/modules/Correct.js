import Vue from "vue";

let state = {
    photoCorrects: [],
    cssFilter: '',
    cssAttrsDef: {
        brightness: 100, // яркость
        contrast: 100, // контрастность
        grayscale: 0, // осветление
        saturate: 100, // насыщенность
        // invert: 100, // тепло/холод
        // opacity: 100, // резкость
    },
    cssAttrs: {
        brightness: 100, // яркость
        contrast: 100, // контрастность
        grayscale: 0, // осветление
        saturate: 100, // насыщенность
        // invert: 100, // тепло/холод
        // opacity: 100, // резкость
    },
}
let getters = {
    photoCorrects: state => state.photoCorrects,
    photoCorrectsById: state => id => {

    },
    getCssAttr: state => name => {
        return state.cssAttrs[name];
    },
    cssFilter: state => state.cssFilter,
    cssAttrs: state => state.cssAttrs,
}
let mutations = {
    getCorrects: (state, payload) => {
        state.photoCorrects = payload
    },
    makeCssFilter: (state, payload) => {
        state.cssFilter = payload;
    },
    setCssAttr: (state, payload) => {
        state.cssAttrs[payload.name] = payload.value
    },
    setSccAttrsById: (state, id) => {
        id += 1
        // console.log(state.photoCorrects, id)
        let obj = state.photoCorrects.find(photo => photo.photo_id === id)
        // console.log(obj)
        if(obj) {
            for(let key of Object.keys(state.cssAttrsDef)) {
                state.cssAttrs[key] = obj[key]
            }
            console.log(state.cssAttrs)
        }
    }
}
let actions = {
    getCorrects:({commit}) => {
        axios.get('/api/corrects')
            .then(res => {
                commit('getCorrects', res.data)
            })
    },
    saveCorrectedImage:({commit}, payload) => {
        payload['photo_id'] = payload['photo_id']
        axios.post('/api/corrects', { data: payload })
            .then(res => {
                console.log('save correct success')
            })
            .catch(err => {
                console.log('save correct invalid')
        })
    },
    makeCssFilter:({ commit, state }) => {
        let attrs = state.cssAttrs;
        let ret = 'filter: ';
        for(let key of Object.keys(attrs)) {
            ret += `${key}(${attrs[key]}%) `;
        }
        ret = ret.trim() + ';';

        commit('makeCssFilter', ret)
    },
    setCssAttr:({ commit }, payload) => {
        commit('setCssAttr', payload);
    },
    setDefaultCssAttrs:({ commit, state }) => {
        for(let key of Object.keys(state.cssAttrsDef)) {
            commit('setCssAttr', {
                name: key,
                value: state.cssAttrsDef[key]
            })
        }
    },
    setSccAttrsById: ({ commit, state }, id) => {
        commit('setSccAttrsById', id)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

