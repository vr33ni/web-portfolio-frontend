<template>
  <div>
    <loading :active="isLoading" :is-full-page="true"></loading>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { useStore } from "vuex";

const store = useStore();
//const isLoading = computed(() => store.getters["tasks/isLoading"]);
console.log("loading component ", store.getters['languageSkills/all'], store.getters['tasks/all'])

const isLoading=computed(()=>store.state.tasks.loading ); //store.getters['tasks/all'])
 // const isLoading = computed(() => tasks.value.length > 0);
</script>
