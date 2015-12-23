import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function (controller, model){
    controller.set('model', model);
    document.title = `All Post ${Ember.ENV.TITLE}`;
  },

  model: function() {
		return this.store.findAll('post');
	},

});
