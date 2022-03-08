import { createRouter, createWebHistory } from "vue-router";
import { vuexOidcCreateRouterMiddleware } from "vuex-oidc";
import store from "../store";
import Home from "../components/main/Home.vue";

// async function checkAuth(to, from, next) {
//     const isAdminModeEnabled = computed(() => store.getters['users/getAdminode'];
//     if (isAdminModeEnabled.value) next();
//     else next('/access-denied')
// }

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: (to, from, next) => 
      {
        if (store.state.timelineProfessional.resumeProfileImg === null) {
          store.dispatch("branding/loadImage"),
          store.dispatch("timelineProfessional/loadImage"),
          store.dispatch("timelineProfessional/getResumeTimelineEntries"),
          store.dispatch("languageSkills/getLanguageSkills"),
          store.dispatch("programmingSkills/getProgrammingSkills"),
          store.dispatch("timelineEducation/getResumeTimelineEntries")

          .then(next);
      }
      }
    },
    {
      path: "/resume",
      name: "resume",
      component: Home,
      beforeEnter: (to, from, next) => 
      {
        if (store.state.timelineProfessional.resumeProfileImg === null) {
          store.dispatch("timelineProfessional/loadImage"),
          store.dispatch("timelineProfessional/getResumeTimelineEntries"),
          store.dispatch("languageSkills/getLanguageSkills"),
          store.dispatch("programmingSkills/getProgrammingSkills"),
          store.dispatch("timelineEducation/getResumeTimelineEntries")

          .then(next);
      }
      }
    },
  ],
});

// router.beforeEach(vuexOidcCreateRouterMiddleware(store));

export default router;
