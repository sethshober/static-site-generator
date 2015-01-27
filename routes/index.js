var express = require('express');
var fs = require('fs');
var models = require('../models/posts.js');
//var path = require('path');
//var jade = require('jade');
var files = fs.readdirSync('./posts');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  models.readPosts();
  res.render('index', { title: 'A blog', posts: postChunk });
});

module.exports = router;






