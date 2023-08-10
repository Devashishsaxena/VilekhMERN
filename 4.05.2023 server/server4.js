//node server : request management
import http from 'http';

http.createServer((req,res)=>{
 //console.log(req);     
 console.log("request method : "+req.method);
 console.log("request path : "+req.url);
 res.write("Request working....");
 res.end();
}).listen(8081);

console.log("server invoked at link http://localhost:8081");

