//file handelling

import fs from 'fs';

console.log("Before file operation");

fs.exists("data1.txt",(status)=>{
  if(status)
    console.log("File accessed successfully....");
  else 
    console.log("File not found....");
});

/*
var status=fs.existsSync("data1.txt");
if(status)
 console.log("File accessed successfully....");
else 
 console.log("File not found....");
*/ 

console.log("After file operation");