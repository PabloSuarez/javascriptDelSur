import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createPost (objectPost) {
      console.log('llegué a createPost in application.js route');
      console.log(objectPost);

      let post = this.store.createRecord('post', objectPost);
      post.save();
    },

    deletePost (idPost){
      console.log('pots a borrar');

      this.store.findRecord('post', idPost).then(((post) => {
        post.destroyRecord();
      }));
    }
  }
});
