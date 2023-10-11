var app = angular.module("myApp",[])
angular.module('myApp').filter('yearOnly', function() {
    return function(input) {
        if (input) {
            var year = new Date(input).getFullYear();
            return year;
        }
        return "";
    };
});

app.controller("myCTRL",($scope,$http)=>{
    $scope.list=[]
    $scope.newData={}
    $scope.qty=1
    $scope.getData = ()=>{
        $http.get("/api/book").then((response)=>{
            $scope.list = response.data;
        })
        
    }

    $scope.postData = (newData) =>{
        $http.post("/api/add",$scope.newData).then((response)=>{
            $scope.list = response.data;
            $scope.getData();
        })
    }

    $scope.getData();
})