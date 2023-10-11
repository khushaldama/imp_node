var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.itemsPerPage = 2;
    $scope.currentPage = 0;
    $scope.items = [
        {pid: "p01",pname:"Laptop",pcategory:"Electronics",pprice:50000,pdate:"2019-01-01",pimageurl:"images/laptop.jpeg"},
        {pid: "p02",pname:"USB Pendrive",pcategory:"Electronics",pprice:1000,pdate:"2020-07-14",pimageurl:"images/usb.jpeg"},
        {pid: "p03",pname:"Mouse",pcategory:"Electronics",pprice:500,pdate:"2019-03-27",pimageurl:"images/mouse.jpeg"},
    ];
    $scope.nextPage = function() {
        if($scope.currentPage < $scope.items.length/$scope.itemsPerPage - 1){
            $scope.currentPage++;
        }
    };

    $scope.previousPage = function() {
        if($scope.currentPage > $scope.items.length/$scope.itemsPerPage - 1){
            $scope.currentPage--;
        }
    };
});