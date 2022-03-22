// import { createStore } from "vuex";
// import LoadingIndicatorModule from "./modules/loadingIndicator.module.js";
// import ScreenSizeIndicatorModule from "./modules/screenSizeIndicator.module.js";
// import ProfessionalExperienceTimelineModule from "./modules/professionalExperience.module.js";
// import EducationTimelineModule from "./modules/education.module.js";
// import LanguageSkillsModule from "./modules/languages.module.js";
// import ProgrammingSkillsModule from "./modules/programming.module.js";
// import BrandingModule from "./modules/branding.module.js"

// // root state object.
// // each Vuex instance is just a single state tree.

// const store = createStore({
//   modules: {
//     tasks: LoadingIndicatorModule,
//     screenSize: ScreenSizeIndicatorModule,
//     timelineProfessional: ProfessionalExperienceTimelineModule,
//     timelineEducation: EducationTimelineModule,
//     languageSkills: LanguageSkillsModule,
    // programmingSkills: ProgrammingSkillsModule,
//     branding:BrandingModule,
//   },
// });

// export default store;

import { createStore } from "vuex";
import { vuexOidcCreateStoreModule } from "vuex-oidc";
import axios from "axios";
import oidcSettings from "./oidc_config";
import LoadingIndicatorModule from "./modules/loadingIndicator.module.js";
import ScreenSizeIndicatorModule from "./modules/screenSizeIndicator.module.js";
import ProfessionalExperienceTimelineModule from "./modules/professionalExperience.module.js";
import EducationTimelineModule from "./modules/education.module.js";
import LanguageSkillsModule from "./modules/languages.module.js";
import ProgrammingSkillsModule from "./modules/programming.module.js";
import BrandingModule from "./modules/branding.module.js";
import ImageModule from "./modules/image.module.js"
 
// Create a new store instance. 
const store = createStore({
  modules: {
    tasks: LoadingIndicatorModule,
    screenSize: ScreenSizeIndicatorModule,
    timelineProfessional: ProfessionalExperienceTimelineModule,
    timelineEducation: EducationTimelineModule,
    languageSkills: LanguageSkillsModule,
    programmingSkills: ProgrammingSkillsModule,
    branding: BrandingModule,
    image: ImageModule,
 
    // initialize PING-OIDC module

    oidcStore: vuexOidcCreateStoreModule(
      oidcSettings,
      { namespaced: false, /*publicRoutePaths: ['/']*/ },
      { 
        userLoaded: async (user) => {
          // console.log("user ", user.profile.email);

          axios.defaults.headers.common.Authorization = `${user.token_type} ${user.access_token}`;

          const profPromise = store.dispatch("timelineProfessional/loadData");
          const eduPromise = store.dispatch("timelineEducation/loadData");
          const langPromise = store.dispatch("languageSkills/loadData");
          const progPromise = store.dispatch("programmingSkills/loadData");
          const brandingPromise = store.dispatch("branding/loadData");
          const imagePromise = store.dispatch("image/loadData");

          await Promise.all([
             profPromise,
            eduPromise,
            langPromise,
            progPromise,
            brandingPromise,
            imagePromise
           ]);

          // store.dispatch(
          //   "toasts/add",
          //   {
          //     title: "Initialization successful",
          //     text: "Application ready to use",
          //     cssClass: "success",
          //   },
          //   { root: true }
          // );
        },
      }
    ),
  },
});
  export default store;
