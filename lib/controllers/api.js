'use strict';

var nosql = require('nosql').load('lib/noSql/database.nosql');
var open = require('open');

var test = {};

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  /*res.json([
    {
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }
  ]);*/
};

exports.loadvm = function(req, res) {

  nosql.insert({ firstName: 'Peter', lastName: 'Širka', age: 28 }); //, callback, 'new registered user: Peter Širka');
  /*console.log("Starting Vagrant");
  var exec = require('child_process').exec;  
  exec('vagrant init precise32 http://files.vagrantup.com/precise32.box');//, function callback(error, stdout, stderr){  
  exec('vagrant up');
  console.log("Server is Ready!");*/
};

exports.browerOpen = function(req, res) {
  open('http://localhost:8888', function (err) {
  if (err) throw err;
  console.log('The user closed the browser');
});
};

exports.gitpull = function(req,res){
  var exec = require('child_process').exec;  
  //exec('vagrant ssh');
  //setTimeout(3000);
  console.log("Now pull!!");
  exec('git clone https://github.com/DevApp2450/WordPress.git');
};

exports.insertRepo = function(req, res) {
  var test = req.body;
  console.log(test);
  nosql.insert(test);
};

exports.getRepos = function(req, res) {
  // nosql.each(function(doc) {
  //   test = doc;
  // });
  // //console.log(test);
  nosql.all(function(doc) {
    test = doc;
  });
  //console.log(test);
  res.json(test);
};