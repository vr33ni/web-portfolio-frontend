<template>
      <div class="container">
        <div class="row align-items-start">
          <div class="col-lg-6">
            <div class="img-about" border="0">
              <img
                class="img-fluid"
                :src="profileImg"
                alt="Profile image cap"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-details">
              <div class="section-title">
                <hr class="styleShadow" />
                <h2 id="about">About</h2>
                <hr class="styleShadow" />
              </div>
              <p>
                I am a software engineer with an interdisciplinary background,
                always eager to seek new challenges.<br />
                I have a passion for web development (full stack). My
                programming languages of choice are Javascript and Golang.<br />
                After work, you will find me in the gym (mostly standing on my
                hands), doing gymnastics on bars, bouldering or surfing.
              </p>
              <hr />

              <ul class="about-list mt-4" style="padding-left: 0px">
                <li>
                  <span style="font-weight: bold"> Name:</span>
                  <span> Verena Lechner </span>
                </li>
                <li>
                  <span> Location: </span>
                  <span> Munich, Germany </span>
                </li>
                <li>
                  <span> Occupation: </span>
                  <span> Software engineer @Infineon Technologies </span>
                </li>
              </ul>
              <hr />

              <h5>Contact</h5>
              <a :href="`${linkedin}`" class="card-link" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
              <a :href="`mailto:${email}`" class="card-link">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </a>
              <a :href="`tel:+${mobile}`" class="card-link">
                <font-awesome-icon :icon="['fas', 'phone']" />
              </a>
              <a :href="`${github}`" class="card-link" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a :href="`${instagram}`" class="card-link" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
            </div>
          </div>
        </div>
      </div>
</template>


<script setup>
import { toRefs, ref, defineProps } from "vue";
const props = defineProps({
  profileImg: String,
});


const { profileImg } = toRefs(props);

 const mobile = ref("4550371448");
const email = ref("v.m.s.lechner@gmail.com");
const linkedin = ref("https://www.linkedin.com/in/verena-lechner/");
const github = ref("https://www.github.com/vr33ni");
const instagram = ref("https://www.instagram.com/vr33ni");


</script>

<style lang="scss" scoped>

</style>
