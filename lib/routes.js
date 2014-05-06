'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.route('/api/awesomeThings')
    .get(api.awesomeThings);

  //Loading VM  
  app.route('/api/loadvm')
    .get(api.loadvm);

  //open brower
  app.route('/api/browerOpen')
  .get(api.browerOpen);

  //Git Pull
  app.route('/api/gitpull')
  .get(api.gitpull);

  //Insert Repo
  app.route('/api/insertRepo')
    .post(api.insertRepo, function(req, res){

    });
  
  //Get Inserted Repos
  app.route('/api/getRepos')
    .get(api.getRepos);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get(index.index);
};