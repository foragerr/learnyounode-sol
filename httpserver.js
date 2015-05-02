var fs = require('fs')
var http = require('http')
var server = http.createServer(function(req,res){
	var rs = fs.createReadStream(process.argv[3]);
	rs.on('open', function(){
		rs.pipe(res);
	});
	rs.on('error', function(err) {
    	res.end(err);
  	});
});

server.listen(process.argv[2]);