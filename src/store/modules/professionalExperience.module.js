import axios from "axios";
import dataSync from "../helper/dataSync";

export default {
  namespaced: true,
  modules: { items: dataSync('prof')}
  // state() {

  //   return {
  //     homeImageUrls: [],
  //     homeImageTraining: null,
  //     homeImageResume: null,
  //     homeImageContact: null,
  //     homeImageSoMe: null,
  //     homeImageProjects: null,
  //     resumeProfileImg: null,
  //     timelineEntries: null,
  //     user: null,
  //     status: null,
  //     error: null,
  //   };
  // },
  // mutations: {
  //   SET_HOME_IMG_URLS(state, imgUrls) {
  //     state.homeImageUrls = imgUrls;
  //   },
  //   SET_HOME_IMG_TRAINING(state, imgUrl) {
  //     state.homeImageTraining = imgUrl;
  //   },
  //   SET_HOME_IMG_RESUME(state, imgUrl) {
  //     state.homeImageResume = imgUrl;
  //   },
  //   SET_HOME_IMG_CONTACT(state, imgUrl) {
  //     state.homeImageContact = imgUrl;
  //   },
  //   SET_HOME_IMG_SOME(state, imgUrl) {
  //     state.homeImageSoMe = imgUrl;
  //   },
  //   SET_HOME_IMG_PROJECTS(state, imgUrl) {
  //     state.homeImageProjects = imgUrl;
  //   },
  //   SET_RESUME_IMG_PROFILE(state, imgUrl) {
  //     state.resumeProfileImg = imgUrl;
  //   },

  //   SET_TIMELINE_ENTRIES(state, payload) {
  //     state.timelineEntries = payload;
  //   },

  //   setUser(state, payload) {
  //     state.user = payload;
  //   },

  //   removeUser(state) {
  //     state.user = null;
  //   },

  //   setStatus(state, payload) {
  //     state.status = payload;
  //   },

  //   setError(state, payload) {
  //     state.error = payload;
  //   },
  // },
  // actions: {
  //   async getResumeTimelineEntries({ commit }) {
  //     commit("tasks/show", null, { root: true });
  //      const response = await axios.get("/prof");
  //      // const task = await dispatch(
  //     //   "tasks/add",
  //     //   { title: "Getting timeline" },
  //     //   { root: true }
  //     // );
  //     //console.log("prof timeline", response)
  //     commit("SET_TIMELINE_ENTRIES",response.data)
  //     commit("tasks/hide", null, { root: true });

  //   },
  //   async loadImage({ commit }) {
  //     commit("tasks/show", null, { root: true });
  //     const response = await axios.get("/prof/img");
  //     // console.log("img", response)
  //     commit("SET_RESUME_IMG_PROFILE", response.data);
  //     commit("tasks/hide", null, { root: true });

  //   },
  //   getImagesFromStorage({ commit }) {
  //     // var fileName = 'amagerstrandpark_webster.jpg';
  //     // const storageRef = firebase.storage().ref();
  //     // // .child('images/')
  //     // storageRef.listAll().then((res) => {
  //     //   //for folders
  //     //   // res.prefixes.forEach(folder => {
  //     //   //     console.log(folder);
  //     //   // });
  //     //   // for files NAME and URL
  //     //   var imgUrls = [];
  //     //   res.items.forEach((item) => {
  //     //     item.getDownloadURL().then(function (url) {
  //     //       var img = { imgName: item.name, imgUrl: url };
  //     //       imgUrls.push(img);
  //     //       if (item.name === "amagerstrandpark_webster.jpg") {
  //     //         commit("SET_HOME_IMG_TRAINING", url);
  //     //       }
  //     //       if (item.name === "contact_unsplash-height-200.png") {
  //     //         commit("SET_HOME_IMG_CONTACT", url);
  //     //       }
  //     //       if (item.name === "code_unsplash.jpg") {
  //     //         commit("SET_HOME_IMG_PROJECTS", url);
  //     //       }
  //     //       if (item.name === "resume_unsplash.jpg") {
  //     //         commit("SET_HOME_IMG_RESUME", url);
  //     //       }
  //     //       if (item.name === "SoMe_unsplash.jpg") {
  //     //         commit("SET_HOME_IMG_SOME", url);
  //     //       }
  //     //       // if (item.name === "profile_itu.jpg"){
  //     //       //   commit("SET_RESUME_IMG_PROFILE", url)
  //     //       // }
  //     //     });
  //     //   });
  //     //   commit("SET_HOME_IMG_URLS", imgUrls);
  //     // });
  //   },
  //   // getPosts({ commit }) {
  //   //   axios
  //   //     .get("https://jsonplaceholder.typicode.com/posts")
  //   //     .then((response) => {
  //   //       console.log("posts",response)
  //   //       commit("SET_POSTS", response.data);
  //   //     });
  //   // },
  // },
  // getters: {
  //   homeImageUrls(state) {
  //     return state.homeImageUrls;
  //   },
 
  //   homeImageResume(state) {
  //     return state.homeImageResume;
  //   },
  //   homeImageContact(state) {
  //     return state.homeImageContact;
  //   },
  //   homeImageSoMe(state) {
  //     return state.homeImageSoMe;
  //   },
  //   homeImageProjects(state) {
  //     return state.homeImageProjects;
  //   },
  //   resumeProfileImg(state) {
  //     return state.resumeProfileImg;
  //   },

  //   timelineEntries(state) {
  //     return state.timelineEntries;
  //   },
  //   status(state) {
  //     return state.status;
  //   },

  //   user(state) {
  //     return state.user;
  //   },

  //   error(state) {
  //     return state.error;
  //   },
  // },
};
