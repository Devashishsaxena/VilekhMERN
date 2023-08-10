//file stream : duplex stream

import fs from 'fs';
console.log("Before file operation");

var readStream=fs.createReadStream("data2.txt");
var writeStream=fs.createWriteStream("newdata.txt");

readStream.pipe(writeStream);
console.log("transmission completed....");

console.log("After file operation");








