let http = require('http');
let fs = require("fs");
let path = require("path");

let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        let path = __dirname+"\\q16.html";
        console.log(path);
        let htmlContent = fs.readFile(path,"utf-8",(err,data)=>{
            if(!err){
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            console.log(data);
            res.end(data);
        })
    }
})

server.listen(3000);