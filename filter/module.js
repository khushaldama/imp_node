const app = angular.module("myApp",[])

app.controller("myController",function($scope){
    $scope.Name = "My Name is Khan";

    $scope.list = [
        {"name":"Amir", "Id": "22MCA138", "City": "Vadodara", "blood":"A-"},
        {"name":"Nidhi", "Id": "22MCA142", "City": "Petlad", "blood":"B+"},
        {"name":"Vidhi", "Id": "22MCA143", "City": "??", "blood":"??"},
        {"name":"Kushal", "Id": "22MCA195", "City": "Petlad", "blood":"B-"},
        {"name":"Hetvi", "Id": "22MCA080", "City": "Vadodara", "blood":"AB+"},
    ]
})