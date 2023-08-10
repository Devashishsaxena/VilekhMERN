//file stream : writable stream
import fs from 'fs';
console.log("Before file operation");

var file_content="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScripthello The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.";

var writeStream=fs.createWriteStream("data2.txt");
writeStream.write(file_content);
writeStream.end();

writeStream.on("finish",()=>{
 console.log("Content added in file....");
});

writeStream.on("error",(err)=>{
 console.log(err);
});

console.log("After file operation");








