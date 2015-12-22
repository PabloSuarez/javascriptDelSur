(function () {
  'use strict';
  let mongoose    = require('mongoose'),
      PostsModel  = mongoose.model('Posts');

  let sendError = ((res, code, err) => {
    if(err) return res.status(code).send(err.message);
  });

  let sendResponse = ((res, code, data) => {
    console.log(`Response ${code}`);
    res.status(code).jsonp(data);
  });


  //GET - Return all Posts in the DB
  exports.findAll = ((req, res) => {
    PostsModel.find((err, posts) => {
      sendError(res, 500, err);

      sendResponse(res, 200, {post:posts});
    });
  });

  //GET - Return Post
  exports.findById = ((req, res) => {
    PostsModel.findById(req.params.id, ((err, post) => {
      sendError(res, 500, err);

      sendResponse(res, 200, {
        post:post
      });
    }));
  });


  //POST - add new Document Post
  exports.add = ((req, res) => {
    let _body = req.body.post;

    let post = new PostsModel({
      title   : _body.title,
      subject : _body.subject,
      body    : _body.body
    });

    post.save(((err, post) => {
      sendError(res, 500, err);

      sendResponse(res, 200, {
        post:post
      });
    }));
  });

  //PUT - update a Post by Id
  exports.update = ((req, res) => {
  	PostsModel.findById(req.params.id, ((err, post) => {
      post.title = req.body.title;
      post.subject = req.body.subject;
  		post.body = req.body.body;

  		post.save(((err) => {
  			sendError(res, 500, err);

        sendResponse(res, 200, {
          post:post
        });
  		}));
  	}));
  });

  //DELETE - Delete a Post with specified ID
  exports.delete = ((req, res) => {
  	PostsModel.findByIdAndRemove(req.params.id, ((err, post) => {
  		sendError(res, 500, err);

      if (null === post) {
        console.log(`No exist  /posts/${req.params.id}`);
        return sendResponse(res, 404, post);
      }

      sendResponse(res, 200, {
        post:post
      });
  	}));
  });

  //DELETE - Delete all Posts
  exports.clear = ((req, res) => {
  	PostsModel.remove({}, ((err, data) => {

  		sendError(res, 500, err);

      sendResponse(res, 200, {
        post:data
      });
  	}));
  });

}());
