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
    const eventObj = this.getEventObj(dayId, eventDetails);

    eventObj.edit = true;
  },
  resetEditofAllEvents() {
    this.state.seedData.map(day => {
      day.events.map(event => {
        event.edit = false;
      });
    });
  },
  updateEvent(dayId, originalEventDetails, newEventDetails) {
    const eventObj = this.getEventObj(dayId, originalEventDetails);

    eventObj.details = newEventDetails;
    eventObj.edit = false;
  },
  getEventObj(dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId);

    return dayObj.events.find(event => event.details === eventDetails);
  }
};
