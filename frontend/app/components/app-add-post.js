import Ember from 'ember';

export default Ember.Component.extend({
  post: Ember.inject.service(),

  getObjectPost: function () {
    let _title    = this.get('title'),
        _body     = this.get('body'),
        _subject  = this.get('subject');

    let objectPost = {
      title: _title,
      subject: _subject,
      body: _body
    };
    return objectPost;
  },

  sendObjectPost: function (method) {
    let obj = this.getObjectPost(),
        servicePost = this.get('post');

    if (method === 'createPost') {
      servicePost.createPost(obj);
    }else if (method === 'deletePost') {
      servicePost.deletePost(obj.id);
    }else{
      alert(`what do you mean? -> ${method}`)
    }
  },

  actions: {
    deletePost(){
      this.sendObjectPost('deletePost');
    },

    createPost(){
      this.sendObjectPost('createPost');
    },
  }
});
