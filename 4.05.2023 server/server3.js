//node server : response management
import http from 'http';

http.createServer((req,res)=>{
 res.writeHead(200,{"Content-Type":"text/html"});    
 res.write("<h1>Welcome to node server</h1>");
 res.write("<h2>Welcome to node server</h2>");
 res.write("<h3>Welcome to node server</h3>");
 res.write("<h4>Welcome to node server</h4>");
 res.end();
}).listen(8081);

console.log("server invoked at link http://localhost:8081");

