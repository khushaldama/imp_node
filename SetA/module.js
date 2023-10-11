const app = angular.module("myApp",[])
app.controller("myCTRL",($scope, $http)=>{
    $scope.pri= 0;
    $scope.sto= "";
    $scope.qty= 0;

    $scope.list = []
    $scope.getData = ()=>{
        $http.get("/api/mobile").then((response)=>{
            $scope.list = response.data;
        })
    }
    
    $scope.displayData = (item)=>{
        $scope.qty = item.quantity;
        $scope.pri = item.price;
        $scope.sto = item.storage;
    }

    // $scope.delete = function(item) {
    //     if (item.qty == 0) {
    //         // Send an HTTP request to delete the mobile record
    //         $http.delete(`/api/mobile/${item.MobileID}`).then(function(response){ 
    //                     $scope.list = response.data 
    //                     $scope.getData(); 
    //                     })   
    //     } else {
    //         alert('Cannot delete a mobile with quantity greater than 0.');
    //     }
    // }

    $scope.delete = (item) =>{
       // console.log(item)
        $http.delete(`/api/mobile/${item.MobileID}`).then(function(response){ 
            $scope.list = response.data 
            $scope.getData(); 
            }) 
    }
    
    $scope.getData();
})