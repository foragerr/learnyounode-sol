var httpclient = require('http')
//httpclient.get(process.argv[2], function (response){
//		response.setEncoding('utf-8')
//		response.on('data', console.log);
//		
//});

function printChunks(response){
	response.setEncoding('utf-8')
 	response.on('data', console.log)
    response.on('error', console.error)
}

httpclient.get(process.argv[2], printChunks)