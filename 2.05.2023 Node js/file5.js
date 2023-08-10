//file handelling : to get info about file

import fs from 'fs';

console.log("Before file operation");

/*fs.stat("data1.txt",(err,s)=>{
    if(err)
     console.log(err);
    else 
     console.log(s);
});*/

var s=fs.statSync("data1.txt");
console.log(s);

console.log("After file operation");