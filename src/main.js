import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router/router";
import jQuery from "jquery";
import * as bootstrap from 'bootstrap';
import "./scss/web-component.scss";
import "./plugins/fontawesome";
const $ = jQuery;
window.$ = $;
window.bootstrap = bootstrap;
 
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
// axios.interceptors.request.use((config) => {
//     // trigger 'loading=true' event here
//     console.log("is loading")
//     return config;
//   }, (error) => {
//     // trigger 'loading=false' event here
//     return Promise.reject(error);
//   });

//   axios.interceptors.response.use((response) => {
//     // trigger 'loading=false' event here
//     console.log("is done loading")
//     return response;
//   }, (error) => {
//     // trigger 'loading=false' event here
//     return Promise.reject(error);
//   });



const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(store);
app.use(router);

app.mount("#app");
