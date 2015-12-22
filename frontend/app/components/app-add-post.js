import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    action: function () {
      this.sendAction('action');
    },
  }
});
