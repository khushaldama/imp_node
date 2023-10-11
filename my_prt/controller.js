var app=angular.module('myapp',[]);
app.controller('myCtrl',function($scope){
$scope.itemes=[
    {
        Name:"Akshaer Patel",
        age:23,
        gender:"M",
        path:"3.jpeg",
        price:25000
    },
    {
        Name:"Het Patel",
        age:22,
        gender:"M",
        path:"1.jpg",
        price:10000
    },
    {
        Name:"kamal Patel",
        age:25,
        gender:"M",
        path:"2.jpg",
        price:50000
    }
]
});