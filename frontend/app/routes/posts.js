import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function (controller, model){
    controller.set('model', model);
    controller.set('title', `${Ember.ENV.TITLE} All Post`);
  },

  model: function() {
    console.info('logeo');
		return this.store.findAll('posts');
	}

});
