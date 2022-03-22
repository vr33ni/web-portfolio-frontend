import axios from "axios";
import dataSync from "../helper/dataSync";
 
export default {
  namespaced: true,
  modules: { items: dataSync('edu')}
  // state() {
  //   return {
  //     timelineEntries: null,
  //     error: null,
  //   };
  // },
  // mutations: {
  //   SET_TIMELINE_ENTRIES(state, payload) {
  //     state.timelineEntries = payload;
  //   },
  //   setError(state, payload) {
  //     state.error = payload;
  //   },
  // },
  // actions: {
  //   async getResumeTimelineEntries({ commit }) {
  //     commit("tasks/show", null, { root: true });
  //      const response = await axios.get("/edu");
  //     commit("SET_TIMELINE_ENTRIES",response.data)
  //     commit("tasks/show", null, { root: true });
  //   },
  // },
  // getters: {
  //   resumeProfileImg(state) {
  //     return state.resumeProfileImg;
  //   },
  //   timelineEntries(state) {
  //     return state.timelineEntries;
  //   },
  //   error(state) {
  //     return state.error;
  //   },
  // },
};
