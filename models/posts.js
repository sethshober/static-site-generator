var fs = require('fs');
var path = require('path');
var jade = require('jade');

function readPosts(error) {

var files = fs.readdirSync(process.cwd() + "/posts");
var postChunk = [];
var i = 0;
var file;

    while (postChunk.length < 10) {

      if ( files[i].indexOf('.jade') !== -1 ) { 

      file = fs.readFileSync( path.join( process.cwd() + "/posts", files[i] ) );
      postChunk.push( jade.render(file) ); i++; 

  	  } else if (error) { throw error; }

  	}
      
  	console.log(postChunk);
  	return postChunk;
  	
}


module.exports = {
	"readPosts": readPosts
};