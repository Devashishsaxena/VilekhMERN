// template page (UI page) loading

import http from 'http';
import fs from 'fs';

http.createServer((req,res)=>{
 var file_content=fs.readFileSync("./views/demo.html");
 res.write(file_content);
 res.end();
}).listen(8081);

console.log("server invoked at link http://localhost:8081");

