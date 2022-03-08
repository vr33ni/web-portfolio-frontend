import axios from "axios";

export default {
    namespaced: true,
    state() {

        return {
            languageSkills: null,
            error: null,
        };
    },
    mutations: {

        SET_LANGUAGE_SKILLS(state, payload) {
            state.languageSkills = payload;
        },

        setError(state, payload) {
            state.error = payload;
        },
    },
    actions: {
        async getLanguageSkills({ commit }) {
            const response = await axios.get("/languages");
            commit("SET_LANGUAGE_SKILLS", response.data)
        },

    },
    getters: {

        languageSkills(state) {
            return state.languageSkills;
        },


        error(state) {
            return state.error;
        },
    },
};
