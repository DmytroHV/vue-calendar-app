<template>
  <div id="calendar-week" class="container">
      <div class="columns is-mobile">
        <calendar-day v-for="day in sharedState.seedData"
          :key="day.id"
          :day="day"
        />
      </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import CalendarDay from "./CalendarDay.vue";

export default {
  name: "CalendarWeek",
  components: {
    "calendar-day": CalendarDay
  },
  data() {
    return {
      sharedState: store.state
    };
  }
};
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }
}
</style>

