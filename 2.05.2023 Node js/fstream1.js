//file stream : readable stream
import fs from 'fs';
console.log("Before file operation");

var readStream=fs.createReadStream("data21.txt");

var file_content="";
readStream.on("data",(chunk)=>{
 file_content+=chunk;
});

readStream.on("end",()=>{
 console.log("file content : "+file_content);
});

readStream.on("error",(err)=>{
 console.log(err);
});

console.log("After file operation");








