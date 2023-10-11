const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url;
    if(url == "/home"){
        res.end("Welcome to the Home Page");
    }else if(url == "/Student"){
        res.end("Welcome to the Student Page");
    }else if(url == "/Faculty"){
        res.end("Welcome to the Faculty Page");
    }
  });
   
  server.listen(3000);