app.config(function($routeProvider){
    $routeProvider
    .when("/pruducts",{
        templateUrl : "products/products.view.html"
    })
    .when("/suppliers",{
        templateUrl : "suppliers/suppliers.view.html"
    })
    .when("/shippers",{
        templateUrl : "shippers/shippers.view.html"
    })
})