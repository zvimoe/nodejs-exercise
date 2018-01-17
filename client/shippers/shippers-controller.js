app.controller("products-ctrl",
function($scope,tableHandler){
       var table = 'shippers';
       $scope.modelBinder = {};
       $scope.keys = [];
      
       tableHandler.getTable(this.table,onsucsses,onerror)
          
       function onsucsses(td){
          $scope.productsArray =td.data
          $scope.keys = Object.keys(td.data[0])
          comsole.log($scope.keys)
       }
       function onerror(err){
         console.log(err)
       }  
       $scope.post=function(){
          console.log($scope.modelBinder) 
          var productModel =new shipper($scope.modelBinder);
          tableHandler.addRow(productModel,table,onSucsses,onError)
          function onSucsses(){
            console.log('new row added')
          }
          function onError(err){
            console.log('err'+err)
          }
      }
    
    });
    