var http = require('http');
var fs = require('fs');

// the function of pipe is client dont have to wait until request processing is finished to get all data
// so that data is sent gradually  syntax = .pipe();

// myreadStream.on('data',function(chunck){
// 	console.log('new chunck received.');
// 	mywriteStream.write(chunck);
// })

var server = http.createServer(function(req,res){
	console.log('request was made : ' + req.url);
	res.writeHead(200,{'Content-Type': 'text/html'});
	var myreadStream = fs.createReadStream(__dirname + '/index.html','utf8');
	// var mywriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
	myreadStream.pipe(res);

	// res.end('Hey ninjas.');  
});


server.listen(3000, '127.0.0.1');
console.log('you dwangs, now listening to port 3000')