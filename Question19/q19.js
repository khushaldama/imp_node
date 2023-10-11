let http = require('http');
let arithmatic = require('./arithmatic');

let server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    res.write("<html><body>Addition of 6 and 4 is "+arithmatic.add(6,4)+"<br> Subtraction of 6 and 4 is "+arithmatic.difference(6,4)+"<br> Multiplication of 6 and 4 is "+arithmatic.multiply(6,4)+"<br> Divide of 6 and 4 is "+arithmatic.difference(6,4)+"<br></body></html>");
    res.end();
})

server.listen(3000);