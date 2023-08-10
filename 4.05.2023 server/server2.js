import http from 'http';

http.createServer((req,res)=>{
 res.write("<h1>Welcome to node server</h1>");
 res.end();
}).listen(8081);

console.log("server invoked at link http://localhost:8081");

