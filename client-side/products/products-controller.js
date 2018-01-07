app.controller("products-ctrl",function($scope,TabelHandler){
       var table = 'pruducts';
       var keys = [`ProductID`, `ProductName`, `SupplierID`, `CategoryID`, `QuantityPerUnit`, `UnitPrice`, `UnitsInStock`, `UnitsOnOrder`, `ReorderLevel`, `Discontinued`]
       TabelHandler.getTable(this.table,onsucsses,onerror)
          
       function onsucsses(td){

         $scope.productsArray = JSON.parse(td)
       }
       function onerror(err){
         console.log(err)
       }  
       $scope.post=function(){
         keys.forEach(element => {
           $scope[keys[element]].placeHolder = keys.element;  
         });
       }
    
    });