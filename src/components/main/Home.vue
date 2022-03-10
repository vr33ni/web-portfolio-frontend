<template>
  <div class="container">
    <section class="about-area section-padding bg-light mb-50">
      <AboutMeCard :skill-tags="skillTags" :profile-img="profileImg" />
    </section>
    <section class="resume mb-50">
      <hr class="styleShadow" />
      <h2 id="resume">Resume</h2>
      <hr class="styleShadow" />
      <Resume
        :professional-experience-item-timeline="
          dataTimelineProfessionalExperience
        "
        :education-item-timeline="dataTimelineEducation"
        :date-locale="dateLocale"
        :color-dots="colorDots"
        :skill-tags="skillTags"
      />
    </section>
    <section>
      <hr class="styleShadow" />
      <h2 id="privacy">Privacy policy</h2>
      <hr class="styleShadow" />
      <PrivacyPolicy />
    </section>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import AboutMeCard from "./AboutMeCard.vue";
import Resume from "./Resume.vue";
import PrivacyPolicy from "./PrivacyPolicy.vue";

const store = useStore();
const colorDots = ref("#2da1bf");
const uniqueTimeline = ref({
  type: Boolean,
  default: false,
});
const dateLocale = ref("");
const messageWhenNoItems = ref("No articles found.");

const profileImg = computed(() => {
  return store.state.timelineProfessional.resumeProfileImg !== null
    ? store.state.timelineProfessional.resumeProfileImg
    : null;
});

//computed language skills

const skillTags = computed(() => {
  return store.state.programmingSkills.programmingSkills !== null
    ? store.state.programmingSkills.programmingSkills
    : null;
});

function GetSortedOrderByNestedObjProp(prop, arr) {
  arr.sort(function (a, b) {
    return b.data.from._seconds - a.data.from._seconds;
  });

  return arr;
}

const timelineItems = computed(() => {
  if (store.state.timelineProfessional.timelineEntries != null) {
    const professionalExperience =
      store.state.timelineProfessional.timelineEntries;
    const array = []; // since the data from firebase is retrieved as an object of nested objects, we will transoform it to an array that can be looped over
    Object.keys(professionalExperience).forEach((key) => {
      array.push(professionalExperience[key]);
    });
    return GetSortedOrderByNestedObjProp("from", array);
  }
});
const timelineItemsEducation = computed(() => {
  if (store.state.timelineEducation.timelineEntries != null) {
    const education = store.state.timelineEducation.timelineEntries;
    const array = []; // since the data from firebase is retrieved as an object of nested objects, we will transoform it to an array that can be looped over
    Object.keys(education).forEach((key) => {
      array.push(education[key]);
    });
    return array;
  }
});

const dataTimelineProfessionalExperience = computed(() => {
  return timelineItems.value;
});
const dataTimelineEducation = computed(() => {
  return timelineItemsEducation.value;
});
</script>
