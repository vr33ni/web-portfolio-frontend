import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      logo: null,
      error: null,
    };
  },

  mutations: {
    SET_LOGO(state, imgUrl) {
      state.logo = imgUrl;
    },
  },
  actions: {
    async loadImage({ commit }) {
      const response = await axios.get("/logo");
      commit("SET_LOGO", response.data);
    },
  },
  getters: {
    logo(state) {
      return state.logo;
    },
  },
};
