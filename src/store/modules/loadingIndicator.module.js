export default {
  namespaced: true,
  
  state() {
    return {
      loading: false,
      requestsPending: 0,
    };
  },
  mutations: {
    show(state) {
      state.loading = true;
    },
    hide(state) {
      state.loading = false;
    },
    pending(state) {
      if (state.requestsPending === 0) {
        this.commit("tasks/show");
      }

      state.requestsPending++;
    },
    done(state) {
      if (state.requestsPending >= 1) {
        state.requestsPending--;
      }

      if (state.requestsPending <= 0) {
        this.commit("tasks/hide");
      }
    },
  },
  actions: {
    show({ commit }) {
      commit("show");
    },
    hide({ commit }) {
      commit("hide");
    },
    pending({ commit }) {
      commit("pending");
    },
    done({ commit }) {
      commit("done");
    },
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
  },
};
