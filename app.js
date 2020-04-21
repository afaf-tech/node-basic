var express = require('express');

var app = express();

app.set('view engine','ejs');

// middleware usage
	// express.static() is built in method on express module
	app.use('/assets', express.static('assets'))

	// app.use('/assets', function(req,res, next){
	// 	console.log(req.url);
	// 	next();
	// })

app.get('/', function(req,res){

	// send Templating file
	res.render('index')
})

app.get('/contact', function(req,res){
	// console.log(req.query);
	res.render('contact', {qs: req.query});
})
 
app.get('/profile/:name', function(req,res){
	var data = {age:29, jobs: 'ninja', hobbies:['sepak bola', 'voly', 'mancing','menjaring']}
	res.render('template',{person:req.params.name, data: data})
})

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.listen(3000);    