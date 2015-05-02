var mymodule = require('./modular.js')
mymodule(process.argv[2], process.argv[3], function(err, data){
	if (err) console.log("oh Noes!")
	else data.forEach(function (file){
		console.log(file);
		})
})
