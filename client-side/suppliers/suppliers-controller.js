app.controller("suppliers-ctrl",function($scope,TabelHandler){
       var table = 'pruducts';
       TabelHandler.getTable(this.table,onsucsses,onerror)
          
       function onsucsses(td){

         $scope.productsArray = JSON.parse(td)
       }
       function onerror(err){
         console.log(err)
       }  
    
    });