"use strict";
let mongoose    = require('mongoose'),
    PostsModel  = mongoose.model('Posts');

let sendError = ((res, code, err) => {
  if(err) return res.status(code).send(err.message);
});

let sendResponse = ((res, code, data) => {
  let path = `${res.req.originalMethod}  ${res.req.originalUrl}`;
  console.log(`${path}    ${code}`);
  res.status(code).jsonp(data);
});

//GET - Return all Posts in the DB
exports.findAll = ((req, res) => {
    PostsModel.find((err, posts) => {
      sendError(res, 500, err);

      sendResponse(res, 200, posts);
    });
});

//GET - Return Post
exports.findById = ((req, res) => {
    PostsModel.findById(req.params.id, ((err, post) => {
      sendError(res, 500, err);

      // console.log(`GET /posts/${req.params.id}`);
      sendResponse(res, 200, post);
    }));
});


//POST - add new Document Post
exports.add = ((req, res) => {
  let post = new PostsModel({
    title:  req.body.title,
    subject:  req.body.subject,
    body:   req.body.body
  });

  // console.log(req.body);
  post.save(((err, post) => {
    sendError(res, 500, err);

    sendResponse(res, 200, post);
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

      sendResponse(res, 200, post);
		}));
	}));
});

//DELETE - Delete a Post with specified ID
exports.delete = ((req, res) => {
	PostsModel.findByIdAndRemove(req.params.id, ((err, post) => {
		sendError(res, 500, err);

    if (null == post) {
      return sendResponse(res, 404, post);
      console.log(`No exist  /posts/${req.params.id}`);
    }

    sendResponse(res, 200, post);
	}));
});
