function readPosts() {

var postChunk = [];

    for (var i in files) {
    	
      var file = fs.readFileSync( './posts/' + files[i] );

          postChunk.push( files[i] );

  	}

}

module.exports = {
	"readPosts": readPosts
}
