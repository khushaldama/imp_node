let express = require("express");
let bodyParser = require('body-parser');
let app = express();
app.use(express.urlencoded({ extended: false  }));
app.use(express.json());

let productList = [
    {
        "productName":"Pencil",
        "productCategory":"Stationary",
        "productPrice":10   
    },
    {
        "productName":"Speaker",
        "productCategory":"Electronics",
        "productPrice":3000   
    },
];

app.get("/getProduct", (req, res) => {
    res.send(productList);
});

app.post("/addproduct", (req, res) => {    
    let product = req.body.productName;
    let product2 = req.body.productCategory;
    let product3 = req.body.productPrice;
    let obj = {
        "productName":product,
        "productCategory":product2,
        "productPrice":product3
    };
    console.log(req.body);
    productList.push(obj);
    res.send(productList);
});

app.put("/updateProduct", (req, res) => {
    let product = req.body;
    let index = productList.findIndex((item) => item.productName == product.productName);
    productList[index] = product;
    res.send(productList);
});

app.delete("/deleteproduct", (req, res) => {
    let product = req.body;
    let index = productList.findIndex((item) => item.productName == product.productName);
    productList.splice(index, 1);
    res.send(productList);
});

app.listen(3000);