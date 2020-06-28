var express = require("express");
var app = express();


/************************************************************************ */
/****** Server Configuration */
/************************************************************************ */

//render HTML from the endpoints
var ejs = require('ejs');
app.set('views', __dirname + "/public");
app.engine('html', ejs.renderFile);
app.set('view engine',ejs);

/************************************************************************ */
/*** Server HTML */
/************************************************************************ */
app.get('/', function(req, res){
    res.render('index.html');
})

app.get('/about', function(req,res){
    res.send('<h1 style="color:red;">Briun Greene</h1>')
})

//create the /admin endpoint
//server the admin.html

app.get('/admin',function(req,res){
    res.render('admin.html')
})

app.get('/contact', function(req,res){
    res.send('<h1 style="color:red;">briun.greene@gmail.com</h1>')
})

app.listen(8080,function(){
    console.log("Server running at localhost:8080")
})

//Ctrl + C : kill the server

//put is update, patch is 

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
//  https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//https://www.restapitutorial.com/httpstatuscodes.html