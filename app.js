var express = require('express');

var app = express();

app.set('view engine','ejs');


app.get('/', function(req,res){
	// send Templating file
	res.sendFile(__dirname + '/index.html')
})

app.get('/contact', function(req,res){
	res.send('this is the contact page')
})

app.get('/profile/:id', function(req,res){
	var data = {age:29, jobs: 'ninja'}
	res.render('template',{person:req.params.id, data: data})
})

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.listen(3000);    