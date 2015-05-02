var httpclient = require('http')
var donecount=0;

var resp=["","",""];

httpclient.get(process.argv[2], getwithord(0))
httpclient.get(process.argv[3], getwithord(1))
httpclient.get(process.argv[4], getwithord(2))

function getwithord (ord){
	return function(response){
		response.setEncoding('utf-8')
		response.on('error', console.error)
		response.on('data', function(chunk){resp[ord] += chunk;});
		response.on('end', function(){
			donecount++
			if (donecount==3)
			{
				console.log(resp[0]);
				console.log(resp[1]);
				console.log(resp[2]);
			}
		});
	}
}