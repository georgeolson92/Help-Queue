import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        user: this.get('user'),
        question: this.get('question'),
        date: Date.now(),
      };
      this.sendAction('save', params);
    }
  }
});
