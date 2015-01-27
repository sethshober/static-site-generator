var express = require('express');
var models = require('../models/posts.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var posts = models.readPosts();
  res.render('index', { title: 'A blog', posts: posts });
});

module.exports = router;






