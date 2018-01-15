var models = require('./models.js')
var bl = require('./bl.js')


function get(callback) {

    bl.Products.get(function (err, res) {
        err ? callback(err) : callback(null, res);

        var pruductArray = []
        res.forEach(element => {
            var m = new models.product(element)
            pruductArray.push(m)
        });
    })
}
function post(params, callback) {
    var product = new models.product(JSON.parse(params))
    console.log(product)
    bl.Products.post(product,function(err, res ){
        err ? callback(err) : callback(null, res);
    })


}


module.exports.products = {
    get: get,
    post: post
}