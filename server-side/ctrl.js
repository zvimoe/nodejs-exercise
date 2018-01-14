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
        console.log(pruductArray)
    })
}
function post(params, callback) {
    var product = new models.product(params)
    bl.Products.post(pruduct, err, res => {
        err ? callback(err) : callback(null, res);
    })


}


module.exports.products = {
    get: get,
    post: post
}