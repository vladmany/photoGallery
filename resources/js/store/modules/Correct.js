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
    rotAngle: 0,
    rotAngleIncr: 90,
    rotWithId: {},
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
    rotAngle: state => state.rotAngle,
    rotAngleIncr: state => state.rotAngleIncr,
    rotWithId: state => id => state.rotWithId[id],
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
        let obj = state.photoCorrects.find(photo => photo.photo_id === id)
        if(obj) {
            for(let key of Object.keys(state.cssAttrsDef)) {
                state.cssAttrs[key] = obj[key]
            }
        }
    },
    rotatePhoto: (state, angle) => {
        state.rotAngle += angle;
        if(Math.abs(state.rotAngle) === 360) state.rotAngle = 0;
    },
    setAngle: (state, angle) => {
        state.rotAngle = angle;
    },
    changeRotStyle: (state, id) => {
        state.rotWithId[id] = state.rotAngle;
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
        payload['brightness'] = parseInt(payload['brightness'])-100;
        payload['contrast'] = parseInt(payload['contrast'])-100;
        // payload['photo_id'] = payload['photo_id']
        axios.post('/api/corrects', { data: payload })
            .then(res => {
                console.log('save correct success')
            })
            .catch(err => {
                console.log('save correct invalid')
                console.log(err.response)
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
        let obj = state.photoCorrects.find(photo => photo.photo_id === id)
        if(obj) {
            for(let key of Object.keys(state.cssAttrsDef)) {
                state.cssAttrs[key] = obj[key]
            }
        } else {
            for(let key of Object.keys(state.cssAttrsDef)) {
                commit('setCssAttr', {
                    name: key,
                    value: state.cssAttrsDef[key]
                })
            }
        }
    },
    rotatePhoto: ({ commit }, angle) => {
        commit('rotatePhoto', angle);
    },
    setAngle: ({ commit }, angle) => {
        commit('setAngle', angle);
    },
    turnImage: ({ commit, getters }, id) => {
        let ret = {}
        ret['photo_id'] = id
        ret['angle'] = getters.rotAngleIncr
        console.log(ret)
        axios.post('/api/photo/turn', { data: ret })
            .then(res => {
                console.log('save turn success')
            })
            .catch(err => {
                console.log('save turn invalid')
            })
    },
    changeRotStyle: ({ commit }, id) => {
        commit('changeRotStyle', id)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}

