var fs = require('fs')

function getLines(callback){
	 fs.readFile(process.argv[2], function doneReading(err, filecontentbuf){
	 	callback(filecontentbuf.toString().split('\n').length-1)
	 })
}

function logLength(length){
	console.log(length);
}

getLines(logLength)

