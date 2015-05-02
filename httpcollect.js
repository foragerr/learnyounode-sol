var httpclient = require('http')
httpclient.get(process.argv[2], function (response){
		var fullResponse="";
		response.setEncoding('utf-8')
		response.on('error', console.error)
		response.on('data', function(chunk){fullResponse += chunk;});
		
		response.on('end', function(){
			console.log(fullResponse.length);
			console.log(fullResponse);
		});
});

	

