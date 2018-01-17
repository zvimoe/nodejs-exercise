var models = require('./models.js')
var bl = require('./bl.js')

function getProducts(callback){
    get(models.product,callback)
}        
function postProducts(params,callback){
   post(params,models.product,callback)
}
function getShippers(callback){
    get(models.shipper,callback)
}        
function postShippers(params,callback){
   post(params,models.shipper,callback)
}
function getSuppliers(callback){
    get(models.supplier,callback)
}        
function postSuppliers(params,callback){
   post(params,models.supplier,callback)
}


function get(model,callback) {
    bl.get(model,function (err, modelArray) {
        err ? callback(err) : callback(null,modelArray);

    })
}
function post(params, model,callback) {
    var product = new model(JSON.parse(params))
    console.log(product)
    bl.post(product,function(err,res){
        err ? callback(err) : callback(null, res);
    })


}


module.exports.products = {
    get: getProducts,
    post: postProducts
}
module.exports.shippers = {
    get: getShippers,
    post: postShippers
}
module.exports.suppliers = {
    get: getSuppliers,
    post: postSuppliers
}