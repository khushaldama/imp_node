let http = require("http");
let msg = require("./module.js");

let server = http.createServer((req,res)=>{
    res.write(msg);
    res.end();
});

server.listen(3000);