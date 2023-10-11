var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.stud = [
        {id: "22MCA001",sname:"Shubham",course:"MCA", age:23, awd:50,iot:81,gc:52},
        {id: "22MCA002",sname:"Manoj",course:"MBA",age:22, awd:52,iot:87,gc:41},
        {id: "22MCA003",sname:"Rakesh",course:"MCA",age:23, awd:47,iot:94,gc:57}
    ];

    $scope.ShowResult = function(s){
        $scope.s1 = s.awd;
        $scope.s2 = s.iot;
        $scope.s3 = s.gc;
        $scope.g1 = $scope.CalculateGrade(s.awd);
        $scope.g2 = $scope.CalculateGrade(s.iot);
        $scope.g3 = $scope.CalculateGrade(s.gc);
        $scope.total = s.awd + s.iot + s.gc;
        $scope.percentage = $scope.total / 3;
    }

    $scope.CalculateGrade = function(marks){
        if(marks >= 80){
            return "AA";
        }else if(marks >= 75 && marks < 80){
            return "AB";
        }else if(marks >= 70 && marks < 75){
            return "BB";
        }else if(marks >= 65 && marks < 70){
            return "BC";
        }else if(marks >= 60 && marks < 65){
            return "CC";
        }else if(marks >= 55 && marks < 60){
            return "CD";
        }else if(marks >= 50 && marks < 55){
            return "DD";
        }else if(marks >= 45 && marks < 50){
            return "DF";
        }else{
            return "FF";
        }
    }

});