import http from 'http';

var server=http.createServer((request,response)=>{
 response.write("<h1>Welcome to node server</h1>");
 response.end();
});

server.listen(8081,(err)=>{
 if(err)
  console.log(err);
 else
  console.log("server invoked at link http://localhost:8081"); 
});
