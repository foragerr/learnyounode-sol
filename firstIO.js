var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])
var noLines = buf.toString().split('\n').length
console.log(noLines-1)
