import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save: function () {
      let _title = this.get('postTitle'),
          _body  = this.get('postBody');

      let post = this.store.createRecord('post', {
        title: _title,
        body: _body
      });
      post.save();

    },
  }
});
