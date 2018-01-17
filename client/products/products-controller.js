app.controller("products-ctrl",
function($scope,tableHandler){
       var table = 'pruducts';
       $scope.modelBinder = {};
       $scope.values = {
        ProductName :"",
        SupplierID:"",
        CategoryID :"",
        QuantityPerUnit :"",
        UnitPrice:"",
        UnitsInStock :"",
        UnitsOnOrder :"",
        ReorderLevel :"",
        Discontinued :""
      }
       tableHandler.getTable(this.table,onsucsses,onerror)
          
       function onsucsses(td){
          $scope.productsArray =td.data
           
       }
       function onerror(err){
         console.log(err)
       }  
       $scope.post=function(){
          console.log($scope.modelBinder) 
          var productModel =new product($scope.modelBinder);
          tableHandler.addRow(productModel,table,onSucsses,onError)
          function onSucsses(){
            console.log('new row added')
          }
          function onError(err){
            console.log('err'+err)
          }
      }
    
    });
    

