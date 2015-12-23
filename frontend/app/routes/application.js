import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    createPost: function () {
      let _title    = this.get('postTitle'),
          _body     = this.get('postBody'),
          _subject  = this.get('postSubject');


      let post = this.store.createRecord('post', {
        title: _title,
        body: _body,
        subject: _subject
      });
      post.save();
    },
  }
});
