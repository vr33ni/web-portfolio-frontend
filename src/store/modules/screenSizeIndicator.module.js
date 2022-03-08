export default {
  namespaced: true,
  state() {
    return {
      isSmallScreen: false,
      isExtraSmallScreen: false,
    };
  },
  mutations: {
    unsetSmallScreen(store) {
      store.isSmallScreen = false;
    },
    setSmallScreen(store) {
      store.isSmallScreen = true;
    },
    unsetExtraSmallScreen(store) {
      store.isExtraSmallScreen = false;
    },
    setExtraSmallScreen(store) {
      store.isExtraSmallScreen = true;
    },
  },
  actions: {
    setSmallScreen: ({ commit }) => {
      commit("setSmallScreen");
      // commit('setSmallSidebar');
    },
    unsetSmallScreen: ({ commit }) => {
      commit("unsetSmallScreen");
      // commit('unsetSmallSidebar);
    },
    setExtraSmallScreen: ({ commit }) => {
      commit("setExtraSmallScreen");
      // commit('setExtraSmallSidebar');
    },
    unsetExtraSmallScreen: ({ commit }) => {
      commit("unsetExtraSmallScreen");
      // //commit('unsetExtraSmallSidebar')
    },
  },
};
