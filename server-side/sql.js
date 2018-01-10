const mysql = require('mysql');

var executeQuery =function(quary,callback){
const con = mysql.createConnection(
    // connection details
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'northwind4'
    }
);

// 3.cconnect
con.connect(function (err) {
    if (err) {
        console.log('Error connecting to DB:' + err);
        return;
    }
    console.log('Connected');
});

// 4. crud : insert
// use backtick `` for free text
con.query(quary, function (err, rows) {
    var arr=[]
    if (err) {
        callback(err)
    }
    rows.forEach(function (row) {
        arr.push(row);
        console.log(row.model);
    });
   callback(null,arr);
});
con.end();
};
module.exports.executeQuery=executeQuery;