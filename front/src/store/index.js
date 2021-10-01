//Setting up vuex

import { createStore } from 'vuex'

import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';
import game from './modules/game';


export default createStore({
  modules: {
    auth,
    game
  },
  plugins: [
    createPersistedState({
    paths: ['auth.user'] })
]
});
