import axios from "axios";
import dataSync from "../helper/dataSync";

export default {
    namespaced: true,
    modules: { items: dataSync('languages')}
    // state() {

    //     return {
    //         languageSkills: null,
    //         error: null,
    //     };
    // },
    // mutations: {

    //     SET_LANGUAGE_SKILLS(state, payload) {
    //         state.languageSkills = payload;
    //     },

    //     setError(state, payload) {
    //         state.error = payload;
    //     },
    // },
    // actions: {
    //     async getLanguageSkills({ commit }) {
    //         commit("tasks/show", null, { root: true });
    //         const response = await axios.get("/languages");
    //         commit("SET_LANGUAGE_SKILLS", response.data)
    //         commit("tasks/hide", null, { root: true });

    //     },

    // },
    // getters: {

    //     languageSkills(state) {
    //         return state.languageSkills;
    //     },


    //     error(state) {
    //         return state.error;
    //     },
    // },
};
