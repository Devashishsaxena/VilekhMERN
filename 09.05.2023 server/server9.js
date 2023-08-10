// template page (UI page) loading

import http from 'http';
import fs from 'fs';

http.createServer((req,res)=>{
 fs.readFile("./views/demo.html",(err,file_content)=>{
    if(err)
     console.log(err);
    else
    {
     res.write(file_content);
     res.end();
    } 
 });
}).listen(8081);

console.log("server invoked at link http://localhost:8081");

