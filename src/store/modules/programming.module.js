import axios from "axios";
import dataSync from "../helper/dataSync";

export default {
  namespaced: true,
  modules: { items: dataSync('programming')}
  // state() {
  //   return {
  //     projects: null,
  //     programmingSkills: null,
  //     error: null,
  //   };
  // },
  // mutations: {
  //   SET_PROJECTS(state, payload) {
  //     state.projects = payload;
  //   },

  //   SET_PROGRAMMING_SKILLS(state, payload) {
  //     state.programmingSkills = payload;
  //   },

  //   setError(state, payload) {
  //     state.error = payload;
  //   },
  // },
  // actions: {
  //   async getProgrammingSkills({ commit }) {
  //     commit("tasks/show", null, { root: true });
  //     console.log("commit loading");
  //     const response = await axios.get("/programming");
  //     commit("SET_PROGRAMMING_SKILLS", response.data);
  //     commit("tasks/hide", null, { root: true });
  //   },
  // },
  // getters: {
  //   projects(state) {
  //     return state.projects;
  //   },

  //   programmingSkills(state) {
  //     return state.programmingSkills;
  //   },

  //   error(state) {
  //     return state.error;
  //   },
  // },
};
