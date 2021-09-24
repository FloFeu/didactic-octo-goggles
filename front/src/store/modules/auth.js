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
        let userForm = new FormData();
        userForm.append('email', form.email)
        userForm.append('username', form.username),
        userForm.append('password', form.password)
        await dispatch('login', userForm)
    },

    async login(user) {
        console.log(user);
        // await axios.post('auth/login', user)
        //await commit('setUser', user.get('username'))
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
    }

};

export default {
    state,
    getters,
    actions,
    mutations
}