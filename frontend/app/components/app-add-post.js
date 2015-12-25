import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createPost(){
      let _title    = this.get('title'),
          _body     = this.get('body'),
          _subject  = this.get('subject');

      let objectPost = {
        title: _title,
        subject: _subject,
        body: _body
      };

      return this.sendAction('createPost', objectPost);
    }
  }
});
