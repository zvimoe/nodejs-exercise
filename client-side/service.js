app.service("tableHandler", function ($http) {

    this.getTable = function (table, onSucsses, onError) {
        $http({
            method: 'GET',
            url: 'http://localhost:8081/products',
            params: {
                table: table
            }
        }).then(onSucsses, onError)
    }
    this.addRow = function (data,table, onSucsses, onError) {
        $http({
            method: 'POST',
            url: '../express.js',
            params: {
                table: table,
                data: data
            }
        }).then(onSucsses, onError)
    }

});