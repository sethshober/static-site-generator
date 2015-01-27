var fs = require('fs');
var path = require('path');
var jade = require('jade');

function readPosts() {

var files = fs.readdirSync(process.cwd() + "/posts");
var postChunk = [];

    for (var i in files) {
    	
      var file = fs.readFileSync( path.join( process.cwd() + "/posts", files[i] ) );
      postChunk.push( jade.render(file) );

  	}
  	console.log(postChunk);
  	return postChunk;

}

module.exports = {
	"readPosts": readPosts
};
