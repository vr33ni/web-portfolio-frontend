<template>
     <div class="card" style="border: 0px">
      <div class="card-body">
         <h5 class="card-title">Skills</h5>
        <div
          v-for="tag in skillTags"
          :key="tag.id"
          class="tag"
          v-on:click="learnMore(tag)"
          :title="tag.id"
        >
          {{ tag.data.name }}
        </div>
      </div>
    </div>
 </template>


<script setup>
import { toRefs, ref, defineProps } from "vue";
const props = defineProps({
  skillTags: Object,
});

// v-b-popover.hover.top="popoverConfig(tag)"

const { skillTags } = toRefs(props);

const hover = ref(false);
const mobile = ref("4550371448");
const email = ref("v.m.s.lechner@gmail.com");
const linkedin = ref("https://www.linkedin.com/in/verena-lechner/");
const github = ref("https://www.github.com/vr33ni");
const instagram = ref("https://www.instagram.com/vr33ni");

function popoverConfig(tag) {
  return {
    html: true,
    
    title: () => {
      console.log(tag);
      return tag.name;
    },
    content: () => {
      return (
        "Proficiency: " + tag.proficiency + "<br />Projects: " + tag.projects
      );
    },
  };
  function learnMore(tag) {
    this.hover = true;
    console.log("learn more about ", tag.proficiency);
  }
}
</script>

<style lang="scss" scoped>

.tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  border: 1px solid #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag:hover {
  background-color: #ffffff;
  border: 1px solid black;
}

// .tooltip {
//   width: 100px;
// }
// .tooltip .tooltip-inner{
//   max-width: 500px !important;
//   width: 400px !important;
// }

// .tooltip-inner {
//   text-align: left!important;
// }
.my-tooltip-class {
  text-align: left !important;
}
</style>
