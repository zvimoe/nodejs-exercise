var express = require('express');
var bodyParser = require("body-parser");
var dal = require("./sql.js")

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express - to serve the client
// body parser - To handle the data of post

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/products', function (req, res) {
    dal.dal('select * from products',function(td){
        res.end(JSON.parse(td));
    })
    
});
 
// Listen to '/product' in GET Verb methods
app.get('/suppliers', function (req, res) {
    dal.dal('select * from suppliers',function(td){
        res.end(JSON.parse(td));
    })
   
});

// Listen to '/product' in POST Verb methods
 app.post('/product', function (req, res) {
     console.log(req.body); // get the body data of post
     res.end();
 })


// Start the server
var server = app.listen(8081, function () {

})