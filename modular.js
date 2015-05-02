module.exports = function(dir, ext, callback) {
var fs = require('fs')
var path=require('path')

fs.readdir(dir, function afterReading(err, list){
	if (err) return callback(err)
	
	var resArr = []
	list.forEach(function (file){
		if (path.extname(file).substr(1)===ext)
			{//callback(null, path.basename(file)) 
			resArr.push(path.basename(file))}
	})
	return callback(null, resArr)
})
}