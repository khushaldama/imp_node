var app = angular.module('myapp',[]);

app.controller('myCtrl',function($scope,$http){
    $scope.getData = function(){
        $http.get("http://localhost:3000/getTasks").then(function(response){
            $scope.tasks = response.data;
        });
    }

    $scope.getData();
});