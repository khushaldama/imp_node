var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.addtoCart = [];
    $scope.items = [
        {pid: "p01",pname:"Laptop",pcategory:"Electronics",pprice:50000,pdate:"2019-01-01",pimageurl:"images/laptop.jpeg"},
        {pid: "p02",pname:"USB Pendrive",pcategory:"Electronics",pprice:1000,pdate:"2020-07-14",pimageurl:"images/usb.jpeg"},
        {pid: "p03",pname:"Mouse",pcategory:"Electronics",pprice:500,pdate:"2019-03-27",pimageurl:"images/mouse.jpeg"},
    ];
    $scope.addToCart = function(id, qty){
        let obj;
        console.log("Add to cart: "+id+" "+qty);
        for (let i = 0; i < $scope.items.length; i++) {
            const product = $scope.items[i];
            if(product["pid"] == id){
                obj = product;
            }
        }
        let cart = {};
        cart["id"] = obj["pid"];
        cart["pname"] = obj["pname"];
        cart["pcategory"] = obj["pcategory"];
        cart["pprice"] = obj["pprice"];
        cart["quantity"] = qty;
        $scope.addtoCart.push(cart);
    }


});