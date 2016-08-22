import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteTicket(ticket) {
      if (confirm("Are you sure you want to close this question?")) {
        this.sendAction('deleteTicket', ticket);
      }
    }
  }
});
