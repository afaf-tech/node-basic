var http = require('http');
var fs = require('fs');




var server = http.createServer(function(req,res){
	console.log('request was made : ' + req.url);
	res.writeHead(200, {'Content-Type':'application/json'});
	// console.log(req.url);
	var obj = {
		name:'Fikri',
		jobs:'Junior Progammer',
		age:20,
	}
	// before sent obj must be serealized

	res.end(JSON.stringify(obj));

})


server.listen(3000, '127.0.0.1');
console.log('you dawgs, now listening to port 3000');