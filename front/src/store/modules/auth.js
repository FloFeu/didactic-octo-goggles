import axios from 'axios';

let auth =  JSON.parse(localStorage.getItem("vuex"));
let User;


if (!auth) {
    User = {
        username: "",
        userId: -1,
        token: ""
    }
} else {
    User = auth.auth.user
}

const state = {
    user: User,
    token: null
};

const getters = {

    isAuthenticated: state => !!state.token,
    stateUser: state => state.user,
    stateToken: state => state.token,

};

const actions = {
    async register({ dispatch }, form) {
        await axios.post('auth/signup', form)
        await dispatch('login', form)
    },

    async login({commit}, form) {
        let response = await axios.post('auth/login', form);
        await commit("setUser", response.data)
        await commit("setToken", response.data.token)
    },

    async logout({ commit }) {
        commit('logout'),
        localStorage.removeItem('vuex')
    }
};

const mutations = {
    setUser(state, userdata) {
        state.user = userdata;
    },

    setToken(state, token) {
        state.token = token
    },

    logout(state) {
        state.user = null,
        state.token = null
    },

};

export default {
    state,
    getters,
    actions,
    mutations
}