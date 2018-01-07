var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs')
var Ctrl = require('./ctrl.js')

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../node_modules'))
app.use(express.static('../client-side'))

// Express - to serve the client
// body parser - To handle the data of post

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {
    fs.readFile('../client-side/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }

        res.end(data) 
    });
});

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/products', function (req, res) {

   Ctrl.products.get(function(err,td){
       err?console.log('error123'+err):res.end(JSON.stringify(td));
    })
    
});
 
// Listen to '/product' in GET Verb methods
app.get('/suppliers', function (req, res) {
    dal.dal('select * from suppliers',function(td){
        res.end(JSON.stringify(td));
    })
   
 });

 // Listen to '/product' in POST Verb methods
app.post('/products', function (req, res) {
    Ctrl.products.post(req.data); // get the body data of post
     res.end();
 })


// Start the server
var server = app.listen(8081, function () {
 console.log('connected')
})