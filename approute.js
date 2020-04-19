var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	if(req.url ==='/home' || req.url ==='/'){
		// write head of response which then will be sent to client 
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/index.html').pipe(res);
	}else if(req.url==='/contact'){
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/contact.html').pipe(res);
	}else if(req.url ==='/api/ninjas'){
		var ninjas = [{name:'Fikri', jobs:'progammer', age:67},{name:'Akil', jobs:'progammer', age:08}];
		res.writeHead(200, {'Content-Type':'application/json'});
		res.end(JSON.stringify(ninjas));
	}else{
		res.writeHead(404, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/404.html').pipe(res);

	}
})

server.listen(3000,'127.0.0.1');
console.log('you dawgs, now listening on port 3000.')