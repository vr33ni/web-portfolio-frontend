import { createRouter, createWebHistory } from "vue-router";
import { vuexOidcCreateRouterMiddleware } from "vuex-oidc";
import store from "../store";
import Home from "../components/main/Home.vue";
import PrivacyPolicy from "../components/main/PrivacyPolicy.vue";
import OidcCallback from "../components/oidc/OidcCallback.vue";
import OidcCallbackError from "../components/oidc/OidcCallbackError.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      //  beforeEnter: (to, from, next) =>
      // {
      //   if (store.state.timelineProfessional.resumeProfileImg === null) {
      //     // store.dispatch("branding/loadImage"),
      //     // store.dispatch("timelineProfessional/loadImage"),
      //     store.dispatch("timelineProfessional/loadData")
      //     store.dispatch("languageSkills/loadData"),
      //     store.dispatch("programmingSkills/loadData"),
      //     store.dispatch("timelineEducation/laodData")

      //     .then(next);
      // }
      // }
    },
    {
      // needed for PING. Remove if not needed

      path: "/oidc-callback/", // Needs to match redirect_uri in you oidcSettings
      name: "oidcCallback",
      component: OidcCallback,
      meta: {
        isOidcCallback: true,
        isPublic: true,
      },
    },
    {
      // needed for PING. Remove if not needed
      path: "/signin-oidc-error/",
      name: "oidcCallbackError",
      component: OidcCallbackError,
      meta: {
        isPublic: true,
      },
    },
    // {
    //   path: "/resume",
    //   name: "resume",
    //   component: Home,
    // },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyPolicy,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
});

router.beforeEach(vuexOidcCreateRouterMiddleware(store));

export default router;
