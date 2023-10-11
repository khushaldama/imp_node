let http = require('http');
let fs = require("fs");
let path = require("path");

let server = http.createServer((req,res)=>{
    let path = "";
    if(req.url == "/student"){
        path = __dirname+"\\student.html";
        
    }else if(req.url == "/faculty"){
        path = __dirname+"\\faculty.html";
    }
    console.log(path);
    let htmlContent = fs.readFile(path,"utf-8",(err,data)=>{
        if(err){
            console.log("There is error");
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        console.log(data);
        res.write(data);
        res.end();
    })
})

server.listen(3000);