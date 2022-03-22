<template>
  <nav
    class="
      navbar
      fixed-top
      navbar-expand-lg navbar-light
      bg-light
      shadow
      p-3
      mb-5
      bg-body
      rounded
    "
  >
    <div class="container">
      <a class="navbar-brand" style="margin-left: 1em" href="/">
        <img :src="logo" alt="Logo cap" width="40" height="34" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#resume"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Resume
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#prof"
                  >Professional experience</a
                >
              </li>
              <li><a class="dropdown-item" href="#edu">Education</a></li>
            </ul>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li> -->
          <li class="nav-item">
           
             <a class="nav-link" href="#">Blog</a>
            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <!-- <router-link to="#privacy" class="nav-item nav-link" active-class="active" exact>
        Privacy policy
      </router-link> -->
            <a class="nav-link" href="#privacy">Privacy policy</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script setup>
import { ref, computed, defineEmits } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const store = useStore();

const logo = computed(() => {
  return store.state.branding !== undefined ? store.state.branding.logo : null;
});

const emit = defineEmits(["hamburgerToggle"]);
function hamburgerToggle() {
  emit("hamburgerToggle");
}
</script>
