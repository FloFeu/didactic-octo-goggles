import axios from 'axios';

const state = {
    games: []
};

const actions = {
    async fetchGames({ commit }) {
        let games = await axios.get('/games/')
        await commit("setGames", games.data.games)
    },

    async addGame({ commit }, game) {
        let response = await axios.post('/games', game);
        console.log(response.data)
        await commit("addGame", response.data.game)
    }
};

const mutations = {
    setGames(state, games) {
        state.games = games
    },

    addGame(state, game) {
        state.games.push(game)
    }
};

const getters = {
    stateGames: state => state.games
};

export default {
    state,
    getters,
    actions,
    mutations
}