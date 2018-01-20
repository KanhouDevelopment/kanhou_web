var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.set('view engine', 'pug')
app.use(express.static('views'));

app.get('/', function (req, res) {
    res.render("_layout", {
    	partial: "home"
    });
})
app.get('/about', function (req, res) {
    res.render("_layout", {
    	partial: "about"
    });
})

app.get('/projects', function (req, res) {
    res.render("_layout", {
    	partial: "projects"
    });
})
app.get('/contact', function (req, res) {
    res.render("_layout", {
    	partial: "contact"
    });
})


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})