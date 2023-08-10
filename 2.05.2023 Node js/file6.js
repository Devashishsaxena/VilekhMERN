//file handelling : to get info about file

import fs from 'fs';

console.log("Before file operation");

fs.truncate("data1.txt",(err)=>{
    if(err)
     console.log(err);
    else 
     console.log("File truncated....");
});

console.log("After file operation");