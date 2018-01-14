app.controller("products-ctrl",function($scope,tableHandler){
       var table = 'pruducts';
       var keys = [`ProductID`, `ProductName`, `SupplierID`, `CategoryID`, `QuantityPerUnit`, `UnitPrice`, `UnitsInStock`, `UnitsOnOrder`, `ReorderLevel`, `Discontinued`]
       $scope.values = [ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued]
       tableHandler.getTable(this.table,onsucsses,onerror)
          
       function onsucsses(td){
          $scope.productsArray =td.data
           
       }
       function onerror(err){
         console.log(err)
       }  
       $scope.post=function(){
          var params = {}
          for (let index = 0; index < key.length; index++) {
            params[keys[i]] = $scope.values[i]
          }
          var productModel =new product(params);
          formdata = FormData(productModel)
          tableHandler.addRow(formdata,table,onSucsses,onError)
          function onSucsses(){
            console.log('new row added')
          }
          function onerror(err){
            console.log('err'+err)
          }
      }
    
    });
    

