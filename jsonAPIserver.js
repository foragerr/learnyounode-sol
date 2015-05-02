var map = require('through2-map')
var http = require('http')
var url = require('url')
//var JSON = require('json')

var server = http.createServer(function(req,res){
	if (req.method != 'GET')
    return res.end('send me a GET\n')

	var parsedUrl = url.parse(req.url, true);
	var endpoint = parsedUrl.pathname;
	
	if (endpoint == '/api/parsetime'){
		var d = new Date(parsedUrl.query.iso);
    	res.writeHead(200, {"Content-Type": "application/json"});
    	res.end(JSON.stringify(
			{
				hour: d.getHours(),
      			minute: d.getMinutes(),
      			second: d.getSeconds()
			}
		));
	}else if (endpoint == '/api/unixtime'){
		res.writeHead(200, {"Content-Type": "application/json"});
    	res.end(JSON.stringify({unixtime: (new Date(parsedUrl.query.iso)).getTime()}));
	}else {
		res.writeHead(404);
		res.end();
	}
	
	
		
	req.pipe(map(function (chunk) {
	  return chunk.toString().toUpperCase();
	})).pipe(res)
});

server.listen(process.argv[2]);