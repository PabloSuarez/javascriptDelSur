import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model){
    document.title = `js hello ${Ember.ENV.TITLE}`;
  },

});
