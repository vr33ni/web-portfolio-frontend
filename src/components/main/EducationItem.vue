<template>
  <section class="timeline-item ">
    <div class="container">
      <div class="item">
        <span
          :style="getBackgroundColour(itemTimeline.data.color)"
          class="dot"
        />
        <div class="row" style="width: 100%">
          <div
            class="col-md-3"
            style="align-items: center; display: flex; margin-bottom: 1em"
          >
            <!-- maybe use media query to hide the month/date for small screens -->
            <h3 class="date-item" style="padding-top: 1em">
              {{ getFormattedDate(itemTimeline) }}
            </h3>
          </div>
          <div class="col-md-9">
            <div class="bubble box-shadow">
              <h4 class="title-item" v-html="itemTimeline.data.title" />
              <h5
                class="title-item sub-title-item"
                v-html="itemTimeline.course"
              />
              <p
                class="description-item"
                v-html="itemTimeline.data.description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { toRefs, defineProps } from "vue";
const props = defineProps({
  itemTimeline: Object,
  colorDots: String,
  dateLocale: String,
});
const { itemTimeline, colorDots, dateLocale } = toRefs(props);

function getBackgroundColour(color) {
  return color ? `background:${color}` : `background:${colorDots.value}`;
}

function getFormattedDate(item) {
  const locale = dateLocale.value || window.navigator.language;
  const nameMonth = new Date(item.data.from._seconds * 1000).toLocaleDateString(
    locale,
    {
      month: "long",
    }
  );
  if (item.showDayAndMonth) {
    const day = new Date(item.data.from._seconds * 1000).getDate();
    return `${day}. ${nameMonth}`;
  }
  return nameMonth;
}
</script>

<style lang="scss" scoped>
</style>
