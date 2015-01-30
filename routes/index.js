var express = require('express');
var models = require('../models/posts.js');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  var posts = models.readPosts(10);
  res.render('index', { title: 'A blog', posts: posts });
});

router.get('/posts/:num', function (req, res) {
	//if ( ! req.xhr ) { console.log("I am not AJAX");return; } // make sure it is XHR request and not HTTP
	//else if ( typeof req.params.num === 'number' ) {
		var posts = models.readPosts(req.params.num);
		console.log("I am AJAX request.");
		res.json(posts);
	//}
});

module.exports = router;






