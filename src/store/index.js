import { createStore } from "vuex";
import LoadingIndicatorModule from "./modules/loadingIndicator.module.js";
import ScreenSizeIndicatorModule from "./modules/screenSizeIndicator.module.js";
import ProfessionalExperienceTimelineModule from "./modules/professionalExperience.module.js";
import EducationTimelineModule from "./modules/education.module.js";
import LanguageSkillsModule from "./modules/languages.module.js";
import ProgrammingSkillsModule from "./modules/programming.module.js";
import BrandingModule from "./modules/branding.module.js"

// root state object.
// each Vuex instance is just a single state tree.

const store = createStore({
  modules: {
    tasks: LoadingIndicatorModule,
    screenSize: ScreenSizeIndicatorModule,
    timelineProfessional: ProfessionalExperienceTimelineModule,
    timelineEducation: EducationTimelineModule,
    languageSkills: LanguageSkillsModule,
    programmingSkills: ProgrammingSkillsModule,
    branding:BrandingModule,
  },
});

export default store;
