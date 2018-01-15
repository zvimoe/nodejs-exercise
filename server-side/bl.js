var dal = require('./sql');
var models = require('./models');
var values = require('object.values');


function getProducts(callback) {
    dal.executeQuery('SELECT * FROM `products`', function (err, rows) {
        if (err) {
            callback(err);
        }

        const customersObjectsArray = [];
        rows.forEach(function (row) {
            customersObjectsArray.push(new models.product(row));
        });
        callback(null, customersObjectsArray);
    });
}
function postProducts(product, callback) {
    post(product, 'products', function (err, res) {
        err ? console.log(err) : console.log(res);
    })

}

module.exports.Products = {
    get: getProducts,
    post: postProducts
}
// module.exports.Shippers = {
//     get: getShippers,
//     post: postShippers
// }
// module.exports.Suppliers = {
//     get: getSuppliers,
//     post: postSuppliers
// }



function post(obj, table, callback) {
    var keys = Object.keys(obj)
    var val = Object.values(obj)
    dal.executeQuery("INSERT INTO " + table + "(" + keys + ") VALUES (" + val + ")", function (err) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, 'posted')

        }
    });
}