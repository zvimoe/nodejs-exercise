var dal = require('./sql');
var values = require('object.values');


function get(model,callback) {
    dal.executeQuery('SELECT * FROM '+model.name+'s', function (err, rows) {
        if (err) {
            callback(err);
        }

        const modelArray = [];
        rows.forEach(function (row) {
            modelArray.push(new model(row));
        });
        callback(null, modelArray);
    });
}
function post(model, callback) {
    insertQuaryBuilder(model,model.name+'s' , function (err, res) {
        err ? console.log(err) : console.log(res);
    })

}
function insertQuaryBuilder(obj, table, callback) {
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
module.exports.get = get
module.exports.post = post