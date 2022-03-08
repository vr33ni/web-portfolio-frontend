<template>
  <div id="app" class="d-flex flex-column h-100">
    <the-header @hamburgerToggle="hamburgerToggle"></the-header>
    <!-- <the-sidebar
      v-model:is-visible="visible"
      @sidebarToggle="sidebarToggle"
      @onItemClick="onItemClick"
    ></the-sidebar> -->
    <router-view class="main__container p-3" :class="{ 'main__container--shrink' : !isSmallScreen && visible}"></router-view>
    <!-- <the-footer></the-footer> -->
    <!-- <the-toaster></the-toaster> -->
    <the-loading-indicator></the-loading-indicator>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, toRefs, defineProps } from "vue";
import { useStore } from "vuex";
import TheHeader from "./components/global/TheHeader.vue"
import TheLoadingIndicator from "./components/global/TheLoadingIndicator.vue";

const store = useStore();

const props = defineProps({
  isVisible: Boolean,
  hamburger: Boolean,
});

const { isVisible, isSmall, hamburger } = toRefs(props);

const visible = ref(true);
const smallScreenWidth = ref(720);
const extraSmallScreenWidth = ref(375);

const isSmallScreen = computed(() => store.state.screenSize.isSmallScreen);
const getBootstrapBreakpointLG = computed(() =>
  getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-lg")
);

const init = (e) => {
  if (window.innerWidth < extraSmallScreenWidth.value) {
    store.dispatch("screenSize/setExtraSmallScreen");
    visible.value = false;
  } else if (window.innerWidth < smallScreenWidth.value) {
    store.dispatch("screenSize/setSmallScreen");
    visible.value = false;
  } else {
    store.dispatch("screenSize/unsetExtraSmallScreen");
    store.dispatch("screenSize/unsetSmallScreen");
    visible.value = true;
  }
};

onMounted(() => {
  init();
  window.addEventListener("resize", init);
});

function sidebarToggle() {
  if (visible.value === true) {
    visible.value = false;
  } else visible.value = true;
}

function onItemClick() {
  if (
    store.state.screenSize.isExtraSmallScreen ||
    store.state.screenSize.isSmallScreen
  ) {
    visible.value = false;
  } else visible.value = true;
}

function hamburgerToggle() {
  if (visible.value === true) {
    visible.value = false;
  } else visible.value = true;
}
</script>
<style lang="scss" scoped>
@import "@/scss/_variables.scss";

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

.main {
  &__container {
    position: absolute;
    top: $header-height;
    margin-top: 1rem;
    bottom: 0;
    right: 0;
    left: 0;
    transition: left 0.3s cubic-bezier(1, 0, 0, 1);
    overflow: auto;
    //background-color: #f9f9f9;
    // &--shrink {
    //   left: $sidebar-width;
    // }
  }
}
</style>
