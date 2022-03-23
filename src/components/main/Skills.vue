<template>
  <div class="card" style="border: 0px">
    <div class="card-body">
      <h5 id="skills" class="card-title">Programming languages & tools</h5>
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

const { skillTags } = toRefs(props);

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

</style>
