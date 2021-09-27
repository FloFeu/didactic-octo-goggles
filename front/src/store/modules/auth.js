import axios from 'axios';

const state = {
    user: null,
};

const getters = {

    isAuthenticated: state => !!state.user,
    stateUser: state => state.user,

};

const actions = {
    async register({ dispatch }, form) {
        // console.log("ueeesh")
        await axios.post('auth/signup', form)
      
        await dispatch('login', form)
    },

    async login({commit}, form) {
        await axios.post('auth/login', form);
        await commit("setUser", form.email)
    },

    async logout({ commit }) {
        let user = null
        commit('logout', user)
    }
};

const mutations = {
    setUser(state, username) {
        state.user = username
    },

    logout(state) {
        state.user = null
    },

};

export default {
    state,
    getters,
    actions,
    mutations
}