var express = require('express');
var fs = require('fs');
var path = require('path');
var jade = require('jade');
var files = fs.readdirSync('./posts');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

var postChunk = [];

    for (var i in files) {
      var file = fs.readFileSync( './posts/' + files[i] );

          console.log('File loaded:' + file);

          postChunk.push( jade.render(file, {}) );

          //console.log('received data: ' + data);
          //response.writeHead(200, {'Content-Type': 'text/html'});
  	}
    //response.write(data);
    //response.end();

    console.log(postChunk);


  res.render('index', { title: 'A blog', posts: postChunk });
});

module.exports = router;






