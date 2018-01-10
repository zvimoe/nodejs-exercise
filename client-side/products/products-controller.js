app.controller("products-ctrl",function($scope,tableHandler){
       var table = 'pruducts';
       var keys = [`ProductID`, `ProductName`, `SupplierID`, `CategoryID`, `QuantityPerUnit`, `UnitPrice`, `UnitsInStock`, `UnitsOnOrder`, `ReorderLevel`, `Discontinued`]
       tableHandler.getTable(this.table,onsucsses,onerror)
          
       function onsucsses(td){

        console.log(td.data)
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