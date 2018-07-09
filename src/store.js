import { seedData } from "./seed.js";

export const store = {
  state: {
    seedData
  },
  getActiveDay() {
    return this.state.seedData.find(day => day.active);
  },
  setActiveDay(dayId) {
    this.state.seedData.map(day => {
      day.id === dayId ? (day.active = true) : (day.active = false);
    });
  },
  addEvent(calendarEvent) {
    const aciveDay = this.getActiveDay();

    aciveDay.events.push({ details: calendarEvent, edit: false });
  },
  editEvent(dayId, eventDetails) {
    this.resetEditofAllEvents();
    const day = this.state.seedData.find(day => day.id === dayId);
    const event = day.events.find(event => event.details === eventDetails);

    event.edit = true;
  },
  resetEditofAllEvents() {
    this.state.seedData.map(day => {
      day.events.map(event => {
        event.edit = false;
      });
    });
  }
};
