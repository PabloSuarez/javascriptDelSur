(function () {
  "use strict";
  let express  = require("express"),
      app      = express(),
      http     = require("http"),
      server   = http.createServer(app),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      mongoose = require('mongoose'),
      models = require('./models/posts'),
      cors = require('cors');

  const whitelist = ['http://localhost:4200',];
  let corsOptions = {
    origin: ((origin, callback) => {
      let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
    })
  };

  mongoose.connect('mongodb://localhost/posts', ((err, res) => {
    if(err) console.log('ERROR: connecting to Database. ' + err);
  }));

  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(methodOverride());

  let logger = ((req,res,next) => {
    let _method = req.method,
        _body   = req.body,
        _path   = `${res.req.originalMethod}  ${res.req.originalUrl}`;

    console.log(_path);

    if (_method === 'POST' || _method === 'PUT') {
      console.log(_body);
    }

    next();
  });

  app.use(logger);

  // Trash, need refactor
  require('./routers')(express, app);

  app.listen(3000, (() => {
    console.log("Node server running on http://localhost:3000");
  }));

}());
