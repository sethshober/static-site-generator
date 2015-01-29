var fs = require('fs');
var path = require('path');
var jade = require('jade');

function readPosts(error) {

var files = fs.readdirSync(process.cwd() + "/posts");
var postChunk = [];
var i = 0;
    while (postChunk.length < 10) {

      var file = fs.readFileSync( path.join( process.cwd() + "/posts", files[i] ) );
      if ( file.indexOf('.jade') !== -1 ) { postChunk.push( jade.render(file) ); i++; }
      else if (error) { throw error; }

  	}
      
  	console.log(postChunk);
  	return postChunk;
  	
  	}

}

module.exports = {
	"readPosts": readPosts
};