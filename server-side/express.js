var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs')
var Ctrl = require('./ctrl.js')
const path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/node_modules', express.static(path.join(__dirname.replace('\server-side', ''), 'node_modules')))
app.use('/client', express.static(path.join(__dirname.replace('\server-side', ''), 'client')))

// Express - to serve the client
// body parser - To handle the data of post

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {
   // console.log(path.join(__dirname.replace('\server-side', ''), 'node_modules'));
    fs.readFile('client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        fs.readFile('client/products/product.view.html', 'utf8', function (err, temp) {
            
             res.end(data)
        })
    });
});

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/products', function (req, res) {

    Ctrl.products.get(function (err, td) {
        err ? console.log('error' + err) : res.end(JSON.stringify(td));
    })

});

// Listen to '/product' in GET Verb methods
app.get('/suppliers', function (req, res) {
    dal.dal('select * from suppliers', function (td) {
        res.end(JSON.stringify(td));
    })

});

// Listen to '/product' in POST Verb methods
app.post('/products', function (req, res) {
   Ctrl.products.post(req.query.data,function(err,res){
    err ? console.log('error2' + err) : res.end(JSON.stringify(res+"sucscess with insert"));
       
   }); // get the body data of post
    res.end(req.data);
})


// Start the server
var server = app.listen(8081, function () {
    console.log('connected')
})