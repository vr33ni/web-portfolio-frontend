import axios from "axios";
 
export default {
  namespaced: true,
  state() {

    return {
      projects: null,
      programmingSkills: null,
      error: null,
    };
  },
  mutations: {
    SET_PROJECTS(state, payload) {
      state.projects = payload;
    },

    SET_PROGRAMMING_SKILLS(state, payload) {
      state.programmingSkills = payload;
    },

    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async getProgrammingSkills({ commit }) {
        const response = await axios.get("/programming");
        commit("SET_PROGRAMMING_SKILLS", response.data)
    },
  
  },
  getters: {
    projects(state) {
      return state.projects;
    },
  
    programmingSkills(state) {
      return state.programmingSkills;
    },

    error(state) {
      return state.error;
    },
  },
};
