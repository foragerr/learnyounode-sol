var fs = require('fs')
var path=require('path')

fs.readdir(process.argv[2], function afterReading(err, list){
	// for (var i = 0; i < list.length ;i++) {
	// 	if (path.extname(list[i]).substr(1)===process.argv[3]) 
	// 		console.log(path.basename(list[i]))
	// };

	list.forEach(function (file){
		if (path.extname(file).substr(1)===process.argv[3]) 
			console.log(path.basename(file))
	})
})