import Ember from 'ember';

export default Ember.Controller.extend({
  post: Ember.inject.service(),

  postTitle: 'Create a adapter to ember-data',
  postSubject: 'connect ember to API REST nodejs, expressjs, mongodb',
  postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  actions: {
    deletePost(idPost) {
      let servicePost = this.get('post');
      servicePost.deletePost(idPost);
    }
  }

});
