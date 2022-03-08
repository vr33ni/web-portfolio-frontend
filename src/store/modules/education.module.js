import axios from "axios";
 
export default {
  namespaced: true,
  state() {
    return {
      timelineEntries: null,
      error: null,
    };
  },
  mutations: {
    SET_TIMELINE_ENTRIES(state, payload) {
      state.timelineEntries = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async getResumeTimelineEntries({ commit }) {
       const response = await axios.get("/edu");
      commit("SET_TIMELINE_ENTRIES",response.data)
    },
  },
  getters: {
    resumeProfileImg(state) {
      return state.resumeProfileImg;
    },
    timelineEntries(state) {
      return state.timelineEntries;
    },
    error(state) {
      return state.error;
    },
  },
};
