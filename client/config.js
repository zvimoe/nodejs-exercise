app.config(function($routeProvider){
    $routeProvider
    .when("/pruducts",{
        templateUrl : "client/products/products.view.html"
    })
    .when("/suppliers",{
        templateUrl : "client/suppliers/suppliers.view.html"
    })
    .when("/shippers",{
        templateUrl : "client/shippers/shippers.view.html"
    })
})