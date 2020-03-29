import Vue from "vue";
import Vuex from "vuex";
//import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    selectedGame: "",
  },
  getters: {
    user(state){
      return state.user
    },
    selectedGame(state){
      return state.selectedGame
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_GAME(state, value) {
      state.selectedGame = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    setSelectedGame({ commit }, gameId) {
      commit("SET_GAME", gameId);
    }
  }
});