import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  createPost (objectPost) {
    let post = this.get('store').createRecord('post', objectPost);
    post.save();
  },

  deletePost (idPost){
    this.get('store').findRecord('post', idPost).then(((post) => {
      post.destroyRecord();
    }));
  }
});
