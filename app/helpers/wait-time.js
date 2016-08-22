import Ember from 'ember';

export function waitTime(params) {
  var ticket = params[0];
  var now = Date.now();
  var waitingTime = Math.round((now - ticket.get('date'))/60000);
  return Ember.String.htmlSafe('<p>' + waitingTime + ' minute wait </p>');
}

export default Ember.Helper.helper(waitTime);
