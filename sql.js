const mysql = require('mysql');

const con = mysql.createConnection(
    // connection details
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
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
con.query(`select * from cars`, function (err, rows) {
    if (err) {
        throw err;
    }
    rows.forEach(function (row) {
        arr.push(row);
        console.log(row.model);
    });
    console.log(arr);
});
con.end();
