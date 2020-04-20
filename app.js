var express = require('express');

var app = express();


app.get('/', function(req,res){
	res.send('this is the homepage')
})

app.get('/contact', function(req,res){
	res.send('this is the contact page')
})

app.get('/profile/:id', function(req,res){
	res.send(req.params)
})

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.listen(3000);    