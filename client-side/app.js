'use strict'
var app = angular.module('crud-app', ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/pruducts",{
        templateUrl : "pruducts/pruducts.view.html"
    })
    .when("/suppliers",{
        templateUrl : "suppliers/suppliers.view.html"
    })
    .when("/shippers",{
        templateUrl : "shippers/shippers.view.html"
    })
})
app.service("tableHandler",function($http){

  this.getTable = function(table,onSucsses,onError) {
        $http({
            method :'GET',
            url: '../express.js',
            params: {
               table:table
            }
        }).then(onSucsses,onError)
    }
    this.addRow =  function(table,onSucsses,onError) {
        $http({
            method :'POST',
            url: '../express.js',
            params: {
              table:table,
              data:data
            }
        }).then(onSucsses,onError)
    }

    
   
    });
