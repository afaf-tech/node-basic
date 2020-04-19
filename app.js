var http = require('http');
var fs = require('fs');

var myreadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
var mywriteStream = fs.createWriteStream(__dirname + '/witeMe.txt');

myreadStream.on('data',function(chunck){
	console.log('new chunck received.');
	mywriteStream.write(chunck);
})

// var server = http.createServer(function(req,res){
// 	console.log('request was made : ' + req.url);
// 	res.writeHead(200,{'Content-Type': 'text/plain'});
// 	res.end('Hey ninjas.');  
// });


// server.listen(3000, '127.0.0.1');
// console.log('you dwangs, now listening to port 3000')