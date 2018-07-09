<template>
  <div id="app">
    <calendar-week></calendar-week>
    <calendar-entry></calendar-entry>
  </div>
</template>

<script>
import CalendarEntry from "./components/CalendarEntry.vue";
import CalendarWeek from "./components/CalendarWeek.vue";

export default {
  name: "App",
  components: {
    "calendar-entry": CalendarEntry,
    "calendar-week": CalendarWeek
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
